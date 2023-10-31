from flask import *

from Components.database import *

routes = Blueprint('routes' , __name__ ,)


@routes.route("/api/contact" , methods = ['POST'])
def contact():
    email = request.json['email']
    name = request.json['name']
    phone = request.json['phone']
    msg = request.json['msg']
    
    return jsonify({
        "messages": "Thank you for your message! We will be in touch soon",
    })