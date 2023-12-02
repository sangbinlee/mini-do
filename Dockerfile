FROM node:latest

WORKDIR /app
RUN ls -al
# RUN yarn install
RUN yarn install --production

COPY . .

RUN ls -al

RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]
#  docker build -t mini-do:latest .
# docker run mini-do -p 3000:3000 -v /app/node_modules -v .:/app 