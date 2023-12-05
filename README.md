# Webengineering-Labor

This is a project for the Webengineering 2 Labor. It is a simple web application that shows the height of differend waters in Germany.

## Setup

1. Clone the repository

```bash	
git clone https://github.com/timowaibel/Webengineering-Labor
```

## Run local Development Server (Docker Compose)

This launches a local development server with a the backend and frontend running in docker containers. The backend is reachable at http://localhost:3000 and the frontend at http://localhost:80 by default. It uses (nodemon)[https://nodemon.io/] to automatically restart the backend and/or backend server when changes are made to the source code.

### Prerequisites

- Docker

### Run

1. Install the node dependencies for the backend and frontend

```bash
cd ./backend
npm install
cd ../frontend
npm install
cd ..
```

2. Run the following command in the root directory of the project

```bash
docker-compose up --build 
```

If you want to run the containers detached (in the background) use the following command instead

```bash
docker-compose up --build -d
```

## Run Deployment Server (Kubernetes)

Add deployment and service files to kubernetes cluster

```bash
kubectl apply -f ./kubernetes/backend-deployment.yaml
kubectl apply -f ./kubernetes/backend-service.yaml
kubectl apply -f ./kubernetes/frontend-deployment.yaml
kubectl apply -f ./kubernetes/frontend-service.yaml
```

To delete the deployment and service files from the kubernetes cluster use the following commands

```bash
kubectl delete -f ./kubernetes/backend-deployment.yaml
kubectl delete -f ./kubernetes/backend-service.yaml
kubectl delete -f ./kubernetes/frontend-deployment.yaml
kubectl delete -f ./kubernetes/frontend-service.yaml
```
