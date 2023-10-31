from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import inspect
import json
import pymysql


db = SQLAlchemy()

class CheckIn(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    customer_phone = db.Column(db.String(200) , nullable = False)
    customer_name  = db.Column(db.String(200) , nullable = False)
    check_in_time = db.Column(db.Time , nullable = False)
    dob = db.Column(db.String(200))
    check_in_point = db.Column(db.Integer)
    
    def __init__(self, customer_phone , customer_name ,  dob , check_in_time ,check_in_point):
        
        self.customer_phone = customer_phone
        self.customer_name = customer_name
        self.dob = dob
        self.check_in_point = check_in_point
        self.check_in_time = check_in_time
        
    def to_dict(self):
        
        return {
            'id': self.id,
            'customer_phone': self.customer_phone,
            'dob': self.dob,
            'check_in_time': self.check_in_time.strftime('%H:%M:%S') if self.check_in_time else None,
            'check_in_point': self.check_in_point,
        }


def int__app(app):
    db.__init__(app)
    
def create_all():
    
    inspector = inspect(db.engine)

    if not inspector.has_table('client'):
        Client.__table__.create(db.engine)

    if not inspector.has_table('check_in'):
        CheckIn.__table__.create(db.engine)

class Client(db.Model):
    id = db.Column(db.Integer , primary_key = True)
    custname = db.Column(db.String(200) , nullable = False)
    custphone = db.Column(db.String(200) , nullable = False)
    custdob = db.Column(db.String(200) , nullable = False)
    point = db.Column(db.Integer)
    def __init__(self, custname, custphone , custdob , point):
        self.custname = custname
        self.custphone = custphone
        self.custdob = custdob
        self.point = point