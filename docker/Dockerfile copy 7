FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]

 
#  docker build -t mini-do:latest .
# docker run mini-do -p 3000:3000 -v /app/node_modules -v .:/app 