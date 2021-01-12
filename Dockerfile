FROM node:alpine

WORKDIR /home/site/pwaapp

#Install app dependencies
COPY package*.json ./
RUN npm install

#Copy all
COPY . .

EXPOSE 8000

CMD [ "npm", "start" ]