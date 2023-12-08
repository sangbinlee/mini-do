FROM node:latest

WORKDIR /app
RUN ls -al

# RUN yarn install --production
RUN npm install -D @prisma/nextjs-monorepo-workaround-plugin
RUN yarn install




# ENV DOCKER_VERSION 20.10.7
# RUN curl -sSLf https://download.docker.com/linux/static/stable/x86_64/docker-${DOCKER_VERSION}.tgz | tar -xzvf - docker/docker && chmod +x docker/* && mv docker/* /bin

# RUN test "$(uname -m)" = "aarch64" && TARGET_ARCH=arm64 || TARGET_ARCH=amd64 ; \
#     mkdir -p ~/.docker/cli-plugins && \
#     curl -fsSL "https://github.com/docker/compose/releases/download/${DOCKER_COMPOSEV2_VERSION-v2.0.0-rc.3}/docker-compose-linux-${TARGET_ARCH}" -o ~/.docker/cli-plugins/docker-compose && \
#     chmod +x ~/.docker/cli-plugins/docker-compose && \
#     curl -fsSL -o /usr/local/bin/docker-compose https://github.com/docker/compose-switch/releases/download/v1.0.2/docker-compose-linux-${TARGET_ARCH} && \
#     chmod +x /usr/local/bin/docker-compose && \
#     docker --version && docker compose version && docker-compose version






COPY . .

RUN ls -al

RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]
#  docker build -t mini-do:latest .
# docker run mini-do -p 3000:3000 -v /app/node_modules -v .:/app 