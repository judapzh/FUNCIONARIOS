FROM node:18

WORKDIR /urs/src/app

COPY package*.json ./

RUN npm install

COPY . .
 
 EXPOSE 4001

 CMD ["node", "server.js"]
 