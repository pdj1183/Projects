from flask_restx import Resource
from flask_jwt_extended import jwt_required, get_jwt_identity

from api.db import get_db

class profile(Resource):

    @jwt_required()
    def get(self):
        db = get_db()
        data = db.execute(
                'SELECT * FROM user WHERE username = ?',
                [get_jwt_identity()]
                ).fetchone()
        resposnse_body = {
                "name": data["username"],
                "email": data["email"],
                                }
        return resposnse_body

