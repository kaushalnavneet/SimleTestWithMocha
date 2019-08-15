FROM node:alpine

RUN apk update && apk upgrade && npm install
