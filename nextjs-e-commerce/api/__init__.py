import os
from flask import Flask, jsonify
from flask_restx import Api
from datetime import datetime, timedelta, timezone
import json
from flask_restx.api import re
import jwt


def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
            SECRET_KEY='MY-big-SECRET',
            DATABASE=os.path.join(app.instance_path, 'api.sqlite'),
            )

    if test_config is None:
        app.config.from_pyfile('config.py', silent=True)
    else:
        app.config.from_mapping(test_config)

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    from . import db
    db.init_app(app)


    api = Api(app)
    from . import posts, auth

    app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
    @app.after_request
    def refresh_expiring_jwts(response):
        try:
            old = str(json.loads(response.data)['token'])
            token = jwt.decode(old, auth.SECRET_KEY, algorithms=["HS256"])
            print(token)
            now = datetime.now(timezone.utc)
            target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
            if target_timestamp > token['exp']:
                access_token = jwt.encode({
                    'user': token['username'],
                    'expiration': str(datetime.utcnow() + timedelta(minutes=50))
                    }, auth.SECRET_KEY)
                data = response.get_json()
                if type(data) is dict:
                    data["access_token"] = access_token 
                    response.data = json.dumps(data)
            return response
        except (RuntimeError, KeyError):
            # Case where there is not a valid JWT. Just return the original respone
            return response

    api.add_resource(posts.posts, '/api/posts')
    api.add_resource(auth.signup, '/api/signup')
    api.add_resource(auth.login, '/api/login')

    return app
