from flask import (
    Blueprint, flash, g, json, redirect, render_template, request, url_for
)
from flask_restful import Resource, Api

from api.db import get_db


class get_posts(Resource):
    def get(self):

        db = get_db()
        posts = db.execute(
            'SELECT p.id, p.title, p.description, p.path'
            ' FROM post p '
            ' ORDER BY p.title DESC'
        ).fetchall()

        posts_dict = []

        for post in posts:
            posts_dict.append({"id": post[0], "title": post[1], "description": post[2], "path": post[3]})
        return {'posts': posts_dict}
