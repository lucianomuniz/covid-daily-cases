# Project Title

COVID Daily Cases

## Project Description

This project delivery a REST API that uses a COVID history cases on .csv file available on [Kaggle](https://www.kaggle.com/datasets/yamqwe/omicron-covid19-variant-daily-cases).

The project has APIs to show the number of COVID cases by location, date and variant name.

## The data

### `location`

This is the country for which the variants information is provided;

### `date`

Date for the data entry;

### `variant`

This is the variant corresponding to this data entry;

### `num_sequences`

The number of sequences processed (for the country, variant and date);

### `perc_sequences`

Percentage of sequences from the total number of sequences (for the country, variant and date);

### `numsequencestotal`

Total number of sequences (for the country, variant and date);

## API rotes

The routes are prepared for versioning as the project grows and as needed, and were configured to work with the Version 1 (v1).

To access the APIs use the URL: [http://18.231.191.95:8000/](http://18.231.191.95:8000/v1/) or [http://localhost:8000](http://localhost:8000) if the app running on developement mode, and add the routes below after the URL to access the APIs data.

The postman scripts, used to test the API routes, is included on the project root folder `covid-daily-cases.postman_collection.json`.\
You can import it on [Postman](https://www.postman.com/).

The routes available are:

### GET [/v1/](http://18.231.191.95:8000/v1/)

Returns status 200 and the message "Backend Challenge 2022 🏅 - Covid Daily Cases".

### GET [/v1/cases/:date/count](http://18.231.191.95:8000/v1/cases/2020-07-06/count)

Lists all records on database on a given `date`, grouped by location and order by variant.

### GET [/v1/cases/:date/cumulative](http://18.231.191.95:8000/v1/cases/2020-07-06/cumulative)

Lists all records on database, returning the sum of cases of a given `date`, grouped by location and order by variant.

### GET [/v1/dates](http://18.231.191.95:8000/v1/dates/)

Lists all dates recorded on database.

## Available Scripts

In the project directory, you can run:

### `install-server`

Installs the server npm packages

### `install`

Installs the app npm packages

### `server`

Runs the server on production.

### `watch`

Runs the server on development watch mode.

### `deploy`

Deploys the app.

### `test`

Launches the unit test runner.

## Deployment

Instructions to create a docker image and deploy the application.\
The Docker Server must be installed and running on the development environment.

### `docker build . -t lucianomuniz/covid-daily-cases`

Build a Docker image.

### `docker run -it -p 8000:8000 lucianomuniz/covid-daily-cases`

Execute a Docker image container to test the app on localhost.

### `docker login`

Login on: [http://hub.docker.com](http://hub.docker.com).\
And create Docker Hub repository.

### `docker push lucianomuniz/covid-daily-cases`

Push the image on Docker Hub.

### `ssh -i ".\keys\keys.pem" ec2-user@<server IP>`

Access AWS EC2 instance.

### `sudo yum update -y`

On Linux, check package updates (package manager) using “yum”.

### `sudo yum install docker`

Install Docker on Linux.

### `sudo service docker start`

Start Docker server on Linux.

### `sudo docker info`

Get Docker information.

### `sudo usermod -a -G docker ec2-user`

Insert “ec2-user” user on “docker” root group.

### `docker login`

Deploy docker component on linux via Docker Hub.

### `docker run --restart=always -p 8000:8000 lucianomuniz/covid-daily-cases`

Start docker container.

## Technologies used

List os thechnologies used in this projects: npm packages, frameworks, etc.

### Node

JavaScript runtime environment.

### Express

Package used as middleware and build routes.

### MongoDB

No-SQL Database.

### Mongoose

Object modeling for MongoDB.

### Morgan

Provides logs middleware for Express.

### Cors

Security middleware for Express.

### Dotenv

Config file and loads environment variables separeted from code.

### Docker

Build and manage containers of the application.

### Git

Version control system.

### GitHub

Git repository manager.

### GitHub CI Actions / Workflows

Continuous Integration solution integrated to GitHub.

### AWS EC2

Amazon cloud server solution.

### Postman

API plataform to manage API requests.

## Disclaimer

This is a challenge by [Coodesh](https://coodesh.com/).
