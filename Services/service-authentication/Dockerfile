FROM alpine:3.17

ENV NODE_VERSION 18.16.0

WORKDIR /usr/service-astro-authentication
RUN chmod -R 777 /usr/service-astro-authentication

COPY package.json ./
RUN apk add --update nodejs npm

RUN npm install
COPY . .

EXPOSE 8001
RUN npx prisma generate

CMD ["npm","run", "dev"]


