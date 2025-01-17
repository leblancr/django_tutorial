https://docs.djangoproject.com/en/5.0/intro/

Start virtual environment:
poetry env info
Virtualenv
Python:         3.13.1
Implementation: CPython
Path:           /home/rich/.cache/pypoetry/virtualenvs/django-tutorial--L9eUDp6-py3.13
Executable:     /home/rich/.cache/pypoetry/virtualenvs/django-tutorial--L9eUDp6-py3.13/bin/python
Valid:          True

Base
Platform:   linux
OS:         posix
Python:     3.13.1
Path:       /usr
Executable: /usr/bin/python3.13

https://python-poetry.org/docs/managing-environments/#bash-csh-zsh
to start virtual environment:
# poetry shell - depricated, now use:
poetry env activate - to show command to activate:
source /home/rich/.cache/pypoetry/virtualenvs/django-tutorial--L9eUDp6-py3.13/bin/activate

install poetry-plugin-shell to be able to use poetry shell again:
poetry self add poetry-plugin-shell
now poetry shell works

to start an interactive Python shell with Django's settings and environment loaded,
allowing you to interact with your Django project from the command line:
python manage.py shell

to start the server:
~/projects/python/django_tutorial/django_tutorial> python manage.py runserver  

django admin:
richredddja