from flask import Blueprint, jsonify, redirect, url_for, request, abort
from flask_restx import Resource, api, reqparse
import jsonschema 

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


class login(Resource):
    def post(self):
        args = parser.parse_args()
        user = DAO.login(args)
        if user:
            return 'ok'
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

# @auth.route('/logout')
class logout:
    def post(self):
        return 'Logout'
