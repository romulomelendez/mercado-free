FROM node:20-alpine

WORKDIR /app

COPY *.json .

RUN npm i -g pnpm

RUN pnpm i

EXPOSE 3000

CMD [ "npx", "json-server", "./fake_db.json" ]