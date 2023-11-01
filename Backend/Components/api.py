from flask import request , jsonify , Blueprint
import datetime
from datetime import timedelta , timezone
from flask_jwt_extended import create_access_token, JWTManager , jwt_required, get_jwt, get_jwt_identity, unset_jwt_cookies
from Components.database import *
import json

api  = Blueprint('api' , __name__ ,)

jwt = JWTManager()

admin = {
    'username':'thuy123',
    'password':'123'
}

def init_jwt(app):
    jwt.__init__(app)

    
@api.after_request
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


@api.route("/api/login" , methods = ['POST'])
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
@api.route("/api/logout" , methods = ['POST'])
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response

@api.route('/api/delete/<name>/<int:id>' , methods=['DELETE'])
@jwt_required(locations=['headers'])
def delete_data(name , id):
    
    if name == 'Checkin':
        client = CheckIn.query.get_or_404(id)
        db.session.delete(client)
        db.session.commit()
        return jsonify({
            'message': 'Successful Delete'
        })
    
@api.route('/api/posts/<int:page>/<int:per_page>', methods=['GET'])
@jwt_required(locations=['headers'])
def posts(page=1, per_page=10):
    total = Client.query.count()
    print(total)
    posts = Client.query.order_by(Client.custname)  
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
            'title': p.custname,
            'phone': p.custphone,
            'dob':p.custdob,
            'point': p.point,
        } for p in posts.items]
    }), 201

@api.route("/api/checking", methods=['GET', 'POST'])
def checking():
    if request.method == 'GET':
        return get_checkin()
    else:
        return add_checkin()

def get_checkin():
    # @jwt_required(locations=['headers'])
    def protected():
        data = CheckIn.query.order_by(CheckIn.check_in_time).all()
        list_data = [i.to_dict() for i in data]
        return jsonify({'data': list_data})
    return protected()

def add_checkin():
    data = request.get_json()
    phone = data.get('phone')
    name = data.get('name')
    dob = data.get('dob')
    
    client = None
    
    check_client = Client.query.filter_by(custphone=phone).first()
    
    if dob != "":
        client = Client(custphone=phone, custdob=dob, custname=name, point=1)
    
    if check_client:
        points = check_client.point + 1
    
    checkin_time = datetime.now().strftime("%H:%M")
    checkin = CheckIn(
        customer_phone=phone,
        customer_name=name,
        dob=dob,
        check_in_time=datetime.strptime(checkin_time, "%H:%M").time(),
        check_in_point=points
    )
    
    if client is not None:
        db.session.add_all([checkin, client])
    else:
        db.session.add(checkin)
    
    db.session.commit()
    
    return jsonify({'message': 'Check-in Successful'})
