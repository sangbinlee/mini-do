# react-dockerizing/Dockerfile

# base image 설정(as build 로 완료된 파일을 밑에서 사용할 수 있다.)
FROM node:18-alpine as build

# ENV NODE_ENV=production

# 컨테이너 내부 작업 디렉토리 설정
# RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

# package.json 및 package-lock.json 파일에 명시된 의존성 패키지들을 설치
# RUN npm install --silent
RUN yarn install --production

# 호스트 머신의 현재 디렉토리 파일들을 컨테이너 내부로 전부 복사
# COPY . .
COPY . /app

# 컨테이너의 3000번 포트를 열어준다.
EXPOSE 3000

CMD ["yarn", "start"]

############################

# 그리고 Dockerfile로 docker 이미지를 빌드해야한다.
# $ docker build -t react-1:latest .


############################
# docker run -it -p 3000:3000 react-1
