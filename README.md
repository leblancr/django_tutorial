https://docs.djangoproject.com/en/5.0/intro/
`
Install; poetry:`
If ide doesnt offer link:
# curl -sSL https://install.python-poetry.org | python3 -\n

# This command ensures that the directory where Poetry is installed ($HOME/.local/bin) is included in your system’s 
# executable path.
export PATH="$HOME/.local/bin:$PATH"

Install pyenv:
sudo pkg install pyenv

Add this to shell config (~/.bashrc, ~/.zshrc, etc.):
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"

Install the python version required in toml:
pyenv install 3.12.4     

Set that version for your project:
pyenv local 3.12.0

Then, to link Poetry to the correct Python version, run:
poetry env use $(pyenv which python)
Creating virtualenv django-tutorial-VXBGBbcu-py3.12 in /home/rich/.cache/pypoetry/virtualenvs
Using virtualenv: /home/rich/.cache/pypoetry/virtualenvs/django-tutorial-VXBGBbcu-py3.12

Read your pyproject.toml file
Look at the dependencies you've declared for your project.
Creates (or reuses) a virtual environment:
Installs all dependencies listed in:
    pyproject.toml (declared dependencies)
    poetry.lock (exact versions that were locked previously)
Installs your project in "editable" mode:

poetry install
Installing dependencies from lock file
Package operations: 3 installs, 0 updates, 0 removals
  - Installing asgiref (3.8.1)
  - Installing sqlparse (0.5.3)
  - Installing django (5.2)
Installing the current project: django-tutorial (0.1.0)

poetry env info
Virtualenv
Python:         3.12.4
Implementation: CPython
Path:           /home/rich/.cache/pypoetry/virtualenvs/django-tutorial-VXBGBbcu-py3.12
Executable:     /home/rich/.cache/pypoetry/virtualenvs/django-tutorial-VXBGBbcu-py3.12/bin/python
Valid:          True

Base
Platform:   freebsd14
OS:         posix
Python:     3.12.4
Path:       /home/rich/.pyenv/versions/3.12.4
Executable: /home/rich/.pyenv/versions/3.12.4/bin/python3.12

https://python-poetry.org/docs/managing-environments/#bash-csh-zsh

Start virtual environment:
# poetry shell - depricated, now use:
source $(poetry env info --path)/bin/activate                                                                                                 1 ↵ ──(Fri,May30)─┘
(django-tutorial-py3.12) ┌─(/common-data/projects/python/django_tutorial)───────────────────────────────────────────────
────────────────────────────────────────────────────────────────(rich@r5-5600g-nvidia:pts/4)─┐


install poetry-plugin-shell to be able to use poetry shell again:
poetry self add poetry-plugin-shell
now poetry shell works

to start an interactive Python shell with Django's settings and environment loaded,
allowing you to interact with your Django project from the command line:
python manage.py shell

to start the server:
From:
~/projects/python/django_tutorial/django_tutorial>
python manage.py runserver  

django admin:
richredddja