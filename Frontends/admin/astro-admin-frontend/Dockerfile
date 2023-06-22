FROM alpine:3.17

ENV NODE_VERSION 18.16.0

WORKDIR /usr/astro-admin-frontend
RUN chmod -R 777 /usr/astro-admin-frontend

COPY package.json ./
RUN apk add --update nodejs npm

RUN npm install --force
COPY . .

EXPOSE 3000
RUN npx prisma generate

CMD ["npm","run", "dev"]


