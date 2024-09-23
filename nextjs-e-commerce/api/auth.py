from flask import abort
from flask_restx import Resource, reqparse
from flask import jsonify
from datetime import datetime, timedelta
from flask_jwt_extended import create_access_token


from api.db import get_db


class userDAO(object):
    def get_email(self, email):
        db = get_db()
        return db.execute(
                'SELECT u.* FROM user u WHERE u.email = ?',
                [email]
                ).fetchone()

    def get_username(self, username):
        db = get_db()
        return db.execute(
                 'SELECT u.* FROM user u WHERE u.username = ?',
                 [username]
                 ).fetchone()
    def create(self, data):
        db = get_db()
        db.execute(
                'INSERT INTO user (email, username, password, role) VALUES(?, ?, ?, ?)',
                (data['email'], data['username'], data['password'], 'user')
                )
        db.commit()
    def login(self, data):
        db = get_db()
        return db.execute(
                'SELECT u.* FROM user u WHERE u.username = ? AND u.password = ?',
                [data['username'], data['password']]
                ).fetchone()





DAO = userDAO()

SECRET_KEY='MY-big-SECRET'


class login(Resource):
    def post(self):
        args = parser.parse_args()
        user = DAO.login(args)
        if user:
            token =  create_access_token(identity=user['username'])
            return jsonify({'token': token})
        return abort(400, 'Failed Login')    

parser = reqparse.RequestParser()
parser.add_argument('email')
parser.add_argument('password')
parser.add_argument('username')

class signup(Resource):
    def post(self):
        args = parser.parse_args()

        user = DAO.get_email(args['email'])
        if user:
            return abort(400, 'Email already registered with a user!')

        user = DAO.get_username(args['username'])
        if user:
            return abort(400, 'Username already registered with a user!')

        DAO.create(args)

        return 'ok' 

class logout:
    def post(self):
        return 'Logout'
