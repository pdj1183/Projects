from flask_restx import Resource, reqparse
from api.db import get_db

parser = reqparse.RequestParser()
parser.add_argument('genre')

class posts(Resource):
    def get(self):
        args = parser.parse_args()
        if not args['genre']:
            args['genre'] = '%'

        db = get_db()
        posts = db.execute(
            'SELECT p.id, p.title, p.description, p.path'
            ' FROM post p '
            ' WHERE p.genre LIKE ?'
            ' ORDER BY p.title DESC',
            [args['genre']]
        ).fetchall()

        posts_dict = []

        for post in posts:
            posts_dict.append({"id": post[0], "title": post[1], "description": post[2], "path": post[3]})
        return {'posts': posts_dict}
