# Project Sample - JHipster PoC

Access the oficial [README.md](JHIPSTER_README.md) here

## Pre-requirements

Before you can build this project, you must install and configure the following dependencies on your machine:

1. [Node.js](https://nodejs.org/en/): Latest stable version
2. [NPM](https://docs.npmjs.com/cli/v7/commands/npm-install): Latest stable version
3. [JDK 11+](https://www.oracle.com/br/java/technologies/javase/jdk11-archive-downloads.html): Latest stable version
4. [Docker](https://docs.docker.com/get-docker/): Latest stable version
5. [Docker Compose](https://docs.docker.com/compose/install/): Latest stable version

## Simplified Build Steps

1. Terminal 1 - Init database by docker compose (PostgreSQL)

```
docker-compose -f src/main/docker/postgresql.yml up -d
```

2. Terminal 2 - Build the backend service and starting up

```
./mvnw
```

3. Teminal 3 - Run

```
npm install
npm start
```

4. Access [http://localhost:9000/](http://localhost:9000/)

5. Follow the instructions of init page
