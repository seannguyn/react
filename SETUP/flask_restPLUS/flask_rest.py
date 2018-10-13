from flask import Flask
from flask_restplus import Resource, Api
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
api = Api(app)
CORS(app)

# set up mongodb
MONGODB_URI = "mongodb://sean:comp4920@ds121603.mlab.com:21603/9321_asg3"
client = MongoClient(MONGODB_URI, connectTimeoutMS=30000)
db = client.get_database("9321_asg3")

# parse query
parser = reqparse.RequestParser()
parser.add_argument('order', choices=list(column for column in student_model.keys()))
parser.add_argument('ascending', type=inputs.boolean)



@api.route('/predictPrice')
class Price(Resource):
    def get(self):

        # retrieve the query parameters
        args = parser.parse_args()
        order_by = args.get('order')
        ascending = args.get('ascending', True)


        init_doc = db['init']

        cursor = init_doc.find({})
        initList = []

        for document in cursor:
            obj = {}
            obj["user"]     = document['user']
            obj["db"]= document['db']

            initList.append(obj)

        return initList,200

if __name__ == '__main__':
    app.run(debug=True)


#  REQUIREMENT 

# aniso8601==3.0.2
# certifi==2018.8.24
# chardet==3.0.4
# click==6.7
# Flask==1.0.2
# Flask-Cors==3.0.6
# flask-restplus==0.11.0
# idna==2.7
# itsdangerous==0.24
# Jinja2==2.10
# jsonschema==2.6.0
# MarkupSafe==1.0
# oauthlib==2.1.0
# pymongo==3.7.1
# pytz==2018.5
# requests==2.19.1
# requests-oauthlib==1.0.0
# simplejson==3.16.0
# six==1.11.0
# urllib3==1.23
# Werkzeug==0.14.1
# pandas==0.20.3
# numpy==1.13.3
# scikit_learn==0.20.0

