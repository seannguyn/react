from flask import Flask
from flask_restplus import Resource, Api

app = Flask(__name__)
api = Api(app)

@api.route('/first_api')
class HelloWorld(Resource):
    def get(self):
        return [{'id':'1','name':'Sean'},{'id':'2','name':'Nam'}]

if __name__ == '__main__':
    app.run(debug=True)
