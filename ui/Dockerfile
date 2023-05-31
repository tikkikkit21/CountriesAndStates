# syntax=docker/dockerfile:1
   
FROM node:18-alpine
WORKDIR /ui
COPY package*.json .
RUN npm install
COPY . .
CMD ["npm", "start"]
EXPOSE 3000