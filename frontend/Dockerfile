#FROM node:12-alpine
#RUN apk add --no-cache python g++ make
#WORKDIR /frontend
#COPY . .
#RUN yarn
#RUN yarn build
#EXPOSE 80
#COPY dist/ /usr/share/nginx/html/

FROM nginx
COPY dist/ /usr/share/nginx/html/