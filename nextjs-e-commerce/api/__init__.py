import os
from flask import Flask, jsonify
from flask_restx import Api
from datetime import datetime, timedelta, timezone
import json
from flask_restx.api import re
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, create_refresh_token, get_jwt, get_jwt_identity

from api import profile


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

    jwt = JWTManager(app)


    api = Api(app)
    from . import posts, auth, profile

    app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
    @app.after_request
    def refresh_expiring_jwts(response):
        try:
            exp_timestamp = get_jwt()["exp"]
            now = datetime.now(timezone.utc)
            target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
            if target_timestamp > exp_timestamp:
                access_token = create_access_token(identity=get_jwt_identity())
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
    api.add_resource(profile.profile, '/api/profile')

    return app
