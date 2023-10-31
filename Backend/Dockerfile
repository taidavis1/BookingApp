FROM python:3.8
WORKDIR /backend

# set time for docker 

ENV TZ=America/Los_Angeles
RUN apt-get update && \
    apt-get install -y tzdata && \
    ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && \
    echo $TZ > /etc/timezone

COPY requirements.txt requirements.txt
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
EXPOSE 8080

COPY . .
CMD ["gunicorn", "wsgi:app", "-w 2", "-b 0.0.0.0:8080", "-t 30"]
