# [Python Tutor](pythoncoach.in)

# Courses

- Web programming and Computer Fundaments

# Documentation

- python
- pipenv
- django
- postgres
- git
- heroku
- .env

# Heroku

- create heroku app
- add postgres heroku addon
- add SECRET_KEY to config

# Contribute

- create postgres database
- create .env file and fill below

```
SKIP_PREFLIGHT_CHECK=true
SECRET_KEY = %bl77gh ^ 7h%  # (+%(+k&e%)lk$77#v_0tu2jmz2u+8_ws_vu1gs
DATABASE_NAME = python_coach_in
DATABASE_USER = user
DEBUG = True
MONGODB_URL=
DEV_SERVER_PORT=8000
```

```
pipenv shell
pipenv install
./manage.py migrate
./manage.py runserver
```

# Troubleshooting

- python 3.8.2
- pipenv
- psycopg2
- .env
- heroku local
