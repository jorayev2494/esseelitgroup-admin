FROM node:21.5 AS base

WORKDIR /var/project

COPY ./ /var/project

RUN ls -la

RUN apt-get update \
    && npm install --no-progress -g npm@10.2 \
    && npm install --no-progress

############################################################################################

FROM base AS serve

EXPOSE 8080

CMD ["npm", "run", "serve"]

############################################################################################

FROM base AS develop

EXPOSE 8080

CMD ["npm", "run", "dev"]

############################################################################################

FROM base AS build

RUN npm run build

##############################################

FROM nginx:1.25.1-alpine as production

ADD ./docker/node/project-nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /var/project/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
