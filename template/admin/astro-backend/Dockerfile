FROM alpine:3.17

ENV NODE_VERSION 18.16.0

WORKDIR /usr/astro-backend
RUN chmod -R 777 /usr/astro-backend

COPY package.json ./
RUN apk add --update nodejs npm

RUN npm install
COPY . .

EXPOSE 3001
RUN npx prisma generate

CMD ["npm","run", "dev"]


