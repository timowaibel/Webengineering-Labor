# Webengineering-Labor

This is a project for the Webengineering 2 Labor. It is a simple web application that shows the height of differend waters in Germany.

## Setup

1. Clone the repository

```bash	
git clone https://github.com/timowaibel/Webengineering-Labor
```

2. Setup .env files in the backend and frontend directories (see .env.example files)

## Run local Development Server (Docker Compose)

This launches a local development server with a the backend and frontend running in docker containers. The backend is reachable at http://localhost:3000 and the frontend at http://localhost:80 by default. It uses (nodemon)[https://nodemon.io/] to automatically restart the backend and/or backend server when changes are made to the source code.

### Prerequisites

- Docker

### Run

1. Run the following command in the root directory of the project

```bash
docker-compose up -d
```

## Run Deployment Server (Kubernetes)

TODO