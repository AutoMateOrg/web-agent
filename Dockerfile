FROM node:alpine

RUN mkdir /app

WORKDIR /app

COPY src/. .

COPY package.json .

RUN npm install

CMD ["npm", "run", "dev"]
