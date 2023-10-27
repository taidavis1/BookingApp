from flask import Flask , request , jsonify
import json
import datetime
import os
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail , Message
from flask_jwt_extended import create_access_token , JWTManager, jwt_required, set_access_cookies, get_jwt, get_jwt_identity, unset_jwt_cookies
from datetime import timedelta, timezone
import pymysql
from flask_cors import CORS

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://tmstart4:123giadinh@74.208.246.165:3306/thuysalon" 
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = '123giadinh'
app.config["JWT_COOKIE_SECURE"] = True
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=1)
app.config['SECRET_KEY'] = '123giadinh'
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'tmstart4@gmail.com'
app.config['MAIL_PASSWORD'] = 'ppbkjcmhsviugxun'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

CORS(app , supports_credentials=True , origins=["https://luxurynailwestsac.com"])
admin = {
    'username':'thuy123',
    'password':'123'
}
mail = Mail(app)
jwt = JWTManager(app)

################################### Create Model ###################################
db = SQLAlchemy(app)

class Booking(db.Model):
    id = db.Column(db.Integer , primary_key = True)
    name = db.Column(db.String(200) , nullable = False)
    phone = db.Column(db.String(200) , nullable = False)
    date = db.Column(db.String(200) , nullable = False)
    time = db.Column(db.String(200) , nullable = False)
    service_list = db.Column(db.String(200) , nullable = False)
    technician = db.Column(db.String(200) , nullable = False)
    def __init__(self, name, phone , date , time , service_list , technician):
        self.name = name
        self.phone = phone
        self.date = date
        self.time = time
        self.service_list = json.dumps(service_list)      #seriliaze list
        self.technician = technician
    def get_list(self):                                    #Delize list
        return json.loads(self.service_list)
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'phone': self.phone,
            'date': self.date,
            'time': self.time,
            'service_list': self.get_list(),  # Or directly: json.loads(self.service_list)
            'technician': self.technician
        }

with app.app_context():         #Create Table
    db.create_all()

@app.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.datetime.now(timezone.utc)
        target_timestamp = datetime.datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            data = response.get_json()
            if type(data) is dict:
                data["access_token"] = access_token 
                response.data = json.dumps(data)
        return response
    except (RuntimeError, KeyError):
        return response

@app.route("/", methods = ['GET'])
def health():
    return jsonify({'message' : 'hello'})

@app.route("/api/book" , methods = ['POST'])
def booking():
    data = request.get_json()
    slist = data.get('service')
    phone = data.get('phone')
    name = data.get('name')
    time = data.get('time')
    date = data.get('date')
    technician = data.get('technician')
    print(data.get('name'))
    booking = Booking(name , phone , date, time , slist , technician)
    db.session.add(booking)
    db.session.commit()
    
    ############# Send Email ##################
    recipients = ['nguyenthuyan1706@gmail.com']
    subject = 'Hi there'
    html_body = """
<html>
    <head>
        <style>
            body {{
                font-family: Arial, sans-serif;
                background-color: #f5f5f5;
            }}
            .email-container {{
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #ffffff;
                border-radius: 10px;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            }}
            .header {{
                text-align: center;
                margin-bottom: 20px;
            }}
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <h1>Appointments Booking</h1>
            </div>
            <p>Hi There!, Here Your Appointment Details</p>
            <p>Name of Client: {name}</p>
            <p>Phone of Client: {phone}</p>
            <p>Services He/She Want: {services}</p>
            <p>Date of Appointment: {date}</p>
            <p>Time of Appointment: {time}</p>
            <p>Date of Appointment: {date}</p>
            <p>Name of Techinician: {technician}</p>
            <p>Thank you so much !</p>
        </div>
    </body>
</html>
""".format(name=name, phone=phone, services=', '.join(slist), date=date, time=time , technician = technician)

    message = Message(subject, recipients=recipients , sender='phamtai1216@gmail.com')
    message.html = html_body

    mail.send(message)    
    return jsonify({
        "messages": "Thank You For Your Appointment! We will be in touch soon",
    })

@app.route('/api/generatehours/<days>/<date>')
def generatehours(days , date):
    hourSun = ['10:00 AM', '10:15 AM', '10:30 AM', '10:45 AM', '11:00 AM', '11:15 AM', '11:30 AM', '11:45 AM', '12:00 PM', '12:15 PM', '12:30 PM', '12:45 PM', '01:00 PM', '01:15 PM', '01:30 PM', '01:45 PM', '02:00 PM', '02:15 PM', '02:30 PM', '02:45 PM', '03:00 PM', '03:15 PM', '03:30 PM', '03:45 PM', '04:00 PM', '04:15 PM', '04:30 PM', '04:45 PM', '05:00 PM', '05:15 PM', '05:30 PM', '05:45 PM', '06:00 PM']
    hourReg = ['09:00 AM', '09:15 AM', '09:30 AM', '09:45 AM', '10:00 AM', '10:15 AM', '10:30 AM', '10:45 AM', '11:00 AM', '11:15 AM', '11:30 AM', '11:45 AM', '12:00 PM', '12:15 PM', '12:30 PM', '12:45 PM', '01:00 PM', '01:15 PM', '01:30 PM', '01:45 PM', '02:00 PM', '02:15 PM', '02:30 PM', '02:45 PM', '03:00 PM', '03:15 PM', '03:30 PM', '03:45 PM', '04:00 PM', '04:15 PM', '04:30 PM', '04:45 PM', '05:00 PM', '05:15 PM', '05:30 PM', '05:45 PM', '06:00 PM', '06:15 PM', '06:30 PM', '06:45 PM', '07:00 PM']
    similartime  = Booking.query.filter(Booking.date == date).all()
    booked_times = [booking.time for booking in similartime]
    if days == 'Sun':
        available_hours = [item for item in hourSun if item not in booked_times]
    else:
        available_hours = [item for item in hourReg if item not in booked_times]
    return jsonify({
        "hours": available_hours,
    })

@app.route("/api/contact" , methods = ['POST'])
def contact():
    email = request.json['email']
    name = request.json['name']
    phone = request.json['phone']
    msg = request.json['msg']
    
    return jsonify({
        "messages": "Thank you for your message! We will be in touch soon",
    })

@app.route("/api/login" , methods = ['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    print(password)
    if username == admin['username'] and admin['password'] == password:
        access_token = create_access_token(identity=username)
        return jsonify(access_token=access_token)
    else:
        return jsonify({
            'message': 'Not Match'
        })
@app.route("/api/logout" , methods = ['POST'])
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response

@app.route('/api/view' , methods = ['GET'])
@jwt_required(locations=['headers'])
def get_table():
    try:
        data = Booking.query.order_by(Booking.date).all()
        list_data = [i.to_dict() for i in data]
        return jsonify({'data': list_data})
    except Exception as e:
        print("Error in /api/view:", str(e))  # Print error to console
        return jsonify({'error': 'Unauthorized', 'message': str(e)}), 401  # Return 401 with error message

@app.route('/api/delete/<int:id>' , methods=['DELETE'])
@jwt_required(locations=['headers'])
def delete_data(id):
    client = Booking.query.get_or_404(id)
    db.session.delete(client)
    db.session.commit()
    return jsonify({
        'message': 'Successful Delete'
    })
    
@app.route('/api/posts/<int:page>/<int:per_page>', methods=['GET'])
def posts(page=1, per_page=10):
 
    total = Booking.query.count()
    print(total)
 
    posts = Booking.query.order_by(Booking.date)  
    posts = posts.paginate(page=page, per_page=per_page)
 
    return jsonify({
        'total': total,
        'page': page,
        'per_page': per_page,
        'has_next': posts.has_next,
        'has_prev': posts.has_prev,
        'page_list': [iter_page if iter_page else '...' for iter_page in posts.iter_pages()],
        'posts': [{
            'id': p.id,
            'title': p.name,
            'phone': p.phone
        } for p in posts.items]
    })

if __name__ == '__main__':
    app.run(debug = True, host = '0.0.0.0', port=8080)