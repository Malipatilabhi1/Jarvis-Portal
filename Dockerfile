FROM node:18-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm install -g @angular/cli
COPY . /app
# RUN npm start
# EXPOSE 4200
CMD [ "npm", "start" ]
