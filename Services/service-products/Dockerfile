FROM alpine:3.17

ENV NODE_VERSION 18.16.0

WORKDIR /usr/service-products
RUN chmod -R 777 /usr/service-products

COPY package.json ./
RUN apk add --update nodejs npm

RUN npm install
COPY . .

EXPOSE 8007
RUN npx prisma generate

CMD ["npm","run", "dev"]


