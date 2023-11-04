from flask_sqlalchemy import SQLAlchemy
import sqlalchemy
from sqlalchemy import inspect
from pymysql.err import OperationalError


db = SQLAlchemy()


class CheckIn(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    customer_phone = db.Column(db.String(200) , nullable = False)
    customer_name  = db.Column(db.String(200) , nullable = False)
    check_in_time = db.Column(db.Time , nullable = False)
    dob = db.Column(db.String(200) , nullable = True)
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
            'name': self.customer_name,
            'dob': self.dob,
            'check_in_time': self.check_in_time.strftime('%H:%M:%S') if self.check_in_time else None,
            'check_in_point': self.check_in_point,
        }
        
        
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
            