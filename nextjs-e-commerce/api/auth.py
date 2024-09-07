from flask import Blueprint, redirect, url_for, request, abort
from flask_restx import Resource, api, reqparse 

from api.db import get_db

# auth = Blueprint('auth', __name__)

# @auth.route('/api/login', methods=['POST'])

parser = reqparse.RequestParser()
parser.add_argument('email')
parser.add_argument('password')
parser.add_argument('username')


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


       
        
DAO = userDAO()

class login(Resource):
    def get(self):
        username = request.form.get('username')
        password = request.form.get('password')
        return 'Login'

# @auth.route('/api/register', methods=['POST'])

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
