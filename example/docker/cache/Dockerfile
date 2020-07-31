# node alpine 이미지를 base로 하고
FROM node:alpine as dependences

# /app 디렉토리 생성 후 프로젝트 폴더를 /app 복사한다.
WORKDIR /app
COPY package.json /app/

# 의존성 설치 후 빌드를 실행
RUN yarn

FROM dependences as build

# 나머지 프로젝트내 소스 코드를 복사하여 빌드를 실행
COPY . /app
RUN yarn build

# 서비스를 실행할 nginx를 alpine 이미지를 base로 하여
FROM nginx:alpine

# 만들어 놓은 nginx 설정 파일과 위에서 빌드한 결과물을 복사한다.
COPY ./nginx.conf /etc/nginx/conf.d
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
