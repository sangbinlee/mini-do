FROM node:latest
WORKDIR /app
COPY . .
RUN ls -al
RUN yarn install
EXPOSE 3000
RUN yarn build
 
#  docker build -t mini-do:latest .
# docker run mini-do -p 3000:3000 -v /app/node_modules -v .:/app 