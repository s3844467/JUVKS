FROM node:15.13-alpine as build

WORKDIR /FrontEnd/myfirstapp

COPY package.json package-lock.json ./

COPY . ./


RUN npm install
# RUN npm install @mui/material
RUN npm install @material-ui/core
RUN npm install @material-ui/icons
RUN npm install @emotion/react
RUN npm install @emotion/styled

RUN  npm install emailjs-com - save


EXPOSE 3000

CMD ["npm", "start"]

