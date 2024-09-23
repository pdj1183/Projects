from flask_restx import Resource, reqparse
from flask_jwt_extended import jwt_required

from api.db import get_db

class profile(Resource):
    @jwt_required()
    def get(self):
        resposnse_body = {
                "name": "Phillip",
                "about": "TEST"
                }
        return resposnse_body

