FROM node:13.12.0-alpine

RUN npm install -g serve

WORKDIR /home/site/pwaapp

#Install app dependencies
COPY package.json ./
RUN npm install

#Copy all
COPY . .

RUN npm run build

EXPOSE 8000

CMD [ "serve", "-s", "build", "-l", "8000" ]