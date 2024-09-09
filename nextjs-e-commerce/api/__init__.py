import os
from flask import Flask
from flask_restx import Api



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
    api.add_resource(posts.posts, '/api/posts')
    api.add_resource(auth.signup, '/api/signup')
    api.add_resource(auth.login, '/api/login')

    return app
