FROM node:14

# set the working directory
WORKDIR /app

# install dependencies
COPY package*.json /app
RUN npm install

# copy the rest of the files
COPY . /app

# expose port 3000
EXPOSE 3000

# start the app
CMD ["npm", "run", "start"]
