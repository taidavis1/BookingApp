from flask import request , jsonify , Blueprint
import datetime
from datetime import timedelta , timezone
from Components.api import *
from Components.database import *
from flask_socketio import SocketIO , emit
import json

socket  = Blueprint('socket' , __name__ ,)

socketio = SocketIO(cors_allowed_origins="*")

admin = {
    'username':'thuy123',
    'password':'123'
}

def init_sok(app):
    socketio.init_app(app)


@socketio.on('check_in' , namespace="/api/checking")
def add_checkin(data):
    
    if data:
        
        phone = data.get('phone')
        name = data.get('name')
        dob = data.get('dob')
        
        client = None
        
        check_client = Client.query.filter_by(custphone=phone).first()
        
        check_checking = CheckIn.query.filter_by(customer_phone = phone).first()
        
        checkin_time = datetime.datetime.now().strftime("%H:%M")
        
        points = 0
        
        check_in_time = datetime.datetime.strptime(checkin_time, "%H:%M").time()

        
        if dob != "":
            
            dob = datetime.datetime.strptime(dob , "%m/%d/%Y").strftime("%m/%d/%Y")
            points += 1
            client = Client(custphone=phone, custdob=dob, custname=name, point=points)
            
        if check_client and check_checking:
            
            points = check_client.point + 1
            
            check_client.point = points
            
            check_checking.check_in_point = points
                    
            check_checking.check_in_time = check_in_time
            
        elif check_checking:
                    
            check_checking.check_in_time = check_in_time
                
        else:
            checkin = CheckIn(
            customer_phone=phone,
            customer_name=name,
            dob=dob,
            check_in_time= check_in_time,
            check_in_point=points
        )
            db.session.add(checkin)
            
        if client is not None and not check_client:
            
            db.session.add(client)
        
        db.session.commit()
        
        emit("check_in" , args= {'message': 'Check-in Successful'})

        emit('waiting' ,  args= {'data':[
                {'name': name , 
                'check_in_time': check_in_time
                }
            ]}
        )
        
@socketio.on('admin', namespace="/api/admin")
def refresh_admin_data():
    data = CheckIn.query.order_by(CheckIn.check_in_time).all()
    list_data = [i.to_dict() for i in data]
    emit('admin_check', {'data': list_data})