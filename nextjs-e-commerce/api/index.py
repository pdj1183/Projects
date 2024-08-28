# import sqlite3
# from flask import Flask, g
# from flask_restful import Resource, Api
# 
# app = Flask(__name__)
# api = Api(app)
# 
# class HelloWorld(Resource):
#     def get(self):
#         return {'message': "Hello World"}
# 
# api.add_resource(HelloWorld, '/api/test')
# 
# DATABASE = "../image.db"
# 
# def get_db():
#     db = getattr(g, '_database', None)
#     if db is None:
#         db = g._database = sqlite3.connect(DATABASE)
# 
# 
# 
# @app.route("/api/python")
# def hello_world():
#     return "<p>Hello World</p>"
# 
# @app.get("/api/test")
# def test():
#     return "<p>Hello World</p>"
# 
# 
# @app.get("/")
# def load_cards():
#     return ""
# 
# 
# if __name__ == '__main__':
#     app.run(debug=True)
