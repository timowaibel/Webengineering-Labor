FROM node:14

# set the working directory
WORKDIR /app

# install dependencies
COPY package*.json .
RUN npm install

# copy the rest of the files
COPY . .

# start the app
CMD ["npm", "run", "start"]
