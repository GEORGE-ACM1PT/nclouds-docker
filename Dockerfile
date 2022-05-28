FROM node:fermium-alpine
EXPOSE 3000
RUN apk update
RUN apk upgrade
RUN apk add git
WORKDIR /project
RUN git clone https://github.com/GEORGE-ACM1PT/nclouds-docker.git
RUN cd nclouds-docker/backend/ && npm install 
RUN cd nclouds-docker/frontend/ && npm install 
RUN cd nclouds-docker/ && chmod +x run.sh
CMD "./nclouds-docker/run.sh"
