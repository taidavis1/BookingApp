from flask import *
from Components.routes import *
from Components.api import *
from Components.database import *
from Components.config import *
from Components.socket import *
from flask_cors import CORS


app = Flask(__name__)

app.config.from_object(Configuration)


db.init_app(app)

with app.app_context():
    
    if OperationalError and sqlalchemy.exc.OperationalError:
        pass
    
    db.create_all()

init_jwt(app)

init_sok(app)


CORS(app , supports_credentials=True , origins=["https://luxurynailwestsac.com"])
    
app.register_blueprint(routes)

app.register_blueprint(api)

app.register_blueprint(socket)


##################################################################

if __name__ == '__main__':
    
    socketio.run(app ,  port=8080)
