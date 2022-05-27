FROM node:fermium-alpine
RUN apk update
RUN apk upgrade
RUN apk add git
WORKDIR /project
RUN git clone https://github.com/GEORGE-ACM1PT/nclouds-docker.git
RUN cd nclouds-docker
RUN cd backed  
RUN npm install 
RUN node server.js
RUN cd frontend/react-crud-web-api/
RUN npm install
RUN npm start

