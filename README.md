# WebApp boilerplate with React JS and Flask API

install docker and docker-compose

ejecutar el `$ docker-compose up` para levantar la base de datos
ejecutar en un terminal `$ docker-compose exec -it postgres /bin/bash`.

luego entrar en la base de datos: `$ psql`
crear la base de datos example `$ create database example;`
comprobar que existe con `$ \l`

luego ejecutar el `$ pipenv shell`
despues el `$ pipenv install`

luego el `$ npm install`

antes de levantar el entorno compiarse del .env.example las variables de entorno del DATABASE_URL y el BACKEND_URL que tienen el comentario de IN LOCAL

luego si hace falta ejecutar:
`$ pipenv run init` -> si no existe carpeta de migraciones
`$ pipenv run migrate`
`$ pipenv run upgrade`

a continuación ejecutar el:
`$ pipenv run start`
`$ npm run start`

### Manual Installation:

1. Install the python packages: `$ pipenv install`
2. Create a .env file based on the .env.example: `$ cp .env.example .env`
3. Install your database engine and create your database, depending on your database you have to create a DATABASE_URL variable with one of the possible values, make sure you replace the valudes with your database information:

| Engine    | DATABASE_URL                                        |
| --------- | --------------------------------------------------- |
| SQLite    | sqlite:////test.db                                  |
| MySQL     | mysql://username:password@localhost:port/example    |
| Postgress | postgres://username:password@localhost:5432/example |

4. Migrate the migrations: `$ pipenv run migrate` (skip if you have not made changes to the models on the `./src/api/models.py`)
5. Run the migrations: `$ pipenv run upgrade`
6. Run the application: `$ pipenv run start`

### Backend Populate Table Users
