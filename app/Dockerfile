FROM node:14
WORKDIR /usr/src/app
RUN chown node:node ./
USER node
ENV NODE_ENV $NODE_ENV
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "index.js" ]
