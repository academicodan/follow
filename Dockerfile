FROM node:16.4.2-alpine
LABEL maintainer="Pedro Carrijo"
COPY . /var/www
WORKDIR /var/www
RUN apk update && npm install && npm rebuild
ENTRYPOINT npm start
EXPOSE 3000

