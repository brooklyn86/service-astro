FROM alpine:3.17

ENV NODE_VERSION 18.16.0

WORKDIR /usr/service-categories
RUN chmod -R 777 /usr/service-categories

COPY package.json ./
RUN apk add --update nodejs npm

RUN npm install
COPY . .

EXPOSE 8006
RUN npx prisma generate

CMD ["npm","run", "dev"]


