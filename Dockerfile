# FROM node:18-alpine AS development 
FROM node:18-alpine

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./prisma/




# Install app dependencies
# RUN npm install
RUN yarn install
RUN npx prisma generate

RUN npx prisma migrate dev

COPY . .

# RUN npm run build
RUN yarn build
 
 


# COPY --from=development /app/node_modules ./node_modules
# COPY --from=development /app/package.json ./
# COPY --from=development /app/yarn.lock ./


EXPOSE 3000
# CMD [ "npm", "run", "start:prod" ]
CMD [ "npm", "run", "start" ]
# CMD [ "yarn", "run", "start" ]

# docker build -t mini-do:lastest .