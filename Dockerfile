FROM node:alpine

RUN apt-get update && \
    apt-get install -q -y python python-pip
