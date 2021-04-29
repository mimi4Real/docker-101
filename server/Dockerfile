FROM node:12-alpine
WORKDIR /usr/src/server
COPY . .
RUN yarn
EXPOSE 3000
CMD ["yarn", "start"]