FROM node:latest
WORKDIR /app
RUN ls -al
RUN yarn install
COPY . .

RUN yarn build
# EXPOSE 3000
CMD ["npm", "run", "start"]
#  docker build -t mini-do:latest .
# docker run mini-do -p 3000:3000 -v /app/node_modules -v .:/app 