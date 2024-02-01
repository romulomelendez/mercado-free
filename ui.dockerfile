FROM node:20-alpine

WORKDIR /app

COPY package.json .

COPY *-lock.yaml .

RUN npm i -g pnpm

RUN pnpm i

COPY . .

EXPOSE 8080

CMD [ "pnpm", "run", "dev" ]
