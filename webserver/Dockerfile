FROM node:16-alpine

RUN npm install -g typescript
RUN npm install -g ts-node

USER node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY --chown=node:node . .

RUN tsc

CMD [ "node", "dist/app.js" ]