from flask import *
from Components.routes import *
from Components.api import *
from Components.database import *
from Components.config import *
from flask_cors import CORS


app = Flask(__name__)

app.config.from_object(Configuration)


db.init_app(app)

with app.app_context():
    
    if OperationalError and sqlalchemy.exc.OperationalError:
        pass
    
    db.create_all()

init_jwt(app)


CORS(app , supports_credentials=True)
    
app.register_blueprint(routes)

app.register_blueprint(api)


##################################################################

if __name__ == '__main__':
    
    socketio.run(app , debug = True, host = '0.0.0.0', port=8080)
