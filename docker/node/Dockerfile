FROM node:21.5

RUN apt-get update \
    && npm install -g npm@10.2

# EXPOSE 8080

WORKDIR /var/project

CMD ["npm", "run", "serve"]
