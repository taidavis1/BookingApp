from datetime import timedelta

class Configuration:
    
    SQLALCHEMY_DATABASE_URI = "mysql+pymysql://tmstart4:123giadinh@74.208.246.165:3306/thuysalon" 
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = '123giadinh'
    JWT_COOKIE_SECURE = True
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)
    SECRET_KEY = '123giadinh'
    MAIL_SERVER='smtp.gmail.com'
    MAIL_PORT = 465
    MAIL_USERNAME = 'tmstart4@gmail.com'
    MAIL_PASSWORD = 'ppbkjcmhsviugxun'
    MAIL_USE_TLS = False
    MAIL_USE_SSL = True