FROM node:14

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

ENV PORT=2000

EXPOSE 2000

CMD [ "npm", "start" ]