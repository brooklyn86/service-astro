FROM node

ENV NODE_VERSION 18.16.0

WORKDIR /usr/astro-backend
RUN chmod -R 777 /usr/astro-backend

COPY package.json ./

RUN apt update -qq

RUN npm install --silent -qq

COPY . .

EXPOSE 3001

CMD ["/bin/sh","/usr/astro-backend/docker-entrypoint.sh"]


