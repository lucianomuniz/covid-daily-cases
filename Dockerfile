FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

COPY server/package*.json server/
RUN npm run install-server --only=production

COPY server/ server/

USER node

CMD [ "npm", "start", "--prefix", "server" ]

EXPOSE 8000