FROM alpine:3.17

ENV NODE_VERSION 18.16.0

WORKDIR /usr/service-shops
RUN chmod -R 777 /usr/service-shops

COPY package.json ./
RUN apk add --update nodejs npm

RUN npm install
COPY . .

EXPOSE 8004
RUN npx prisma generate

CMD ["npm","run", "dev"]


