    FROM python:3.8
    WORKDIR /backend

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

    # CMD ["python" , "app.py"]

    CMD ["gunicorn", "-k", "eventlet", "-w", "1", "--timeout", "600" , "app:app" , "--bind", "0.0.0.0:8080"]
