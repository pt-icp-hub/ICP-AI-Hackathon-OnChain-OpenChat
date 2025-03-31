FROM node:20-alpine as build

WORKDIR /spotify_bot

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine as production

WORKDIR /spotify_bot

COPY --from=build /spotify_bot/dist ./dist
COPY package*.json ./

RUN npm install --only=production

EXPOSE 5060

CMD [ "node", "dist/server.js" ]
