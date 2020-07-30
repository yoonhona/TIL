FROM node:alpine as build

WORKDIR /app
COPY . /app

RUN yarn
RUN yarn build

FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/conf.d
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
