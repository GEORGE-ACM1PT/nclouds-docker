echo 'hello world!'
cd nclouds-docker/frontend/ && npm start &
sleep 60 && cd nclouds-docker/backend/ && node server.js 
echo 'hello world!2'
 