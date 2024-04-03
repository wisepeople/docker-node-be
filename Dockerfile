# 의존성 설치
FROM node:16-buster
# 작업 디렉토리 전환
WORKDIR /app
# local 컴터에있는  package.json 파일을 현재 워킹 디렉토리에 복사
COPY package*.json ./ 
# local machine 에서 npm install 실행 
RUN npm install --silent
# RUN npm ci --only=production

# ENV NODE_ENV production

COPY . .
# RUN npm install
# RUN npm install -g nodemon
# node 이미지에 이미 "node"라는 사용자가 uid/gid 1000번으로 생성되어 있음
# USER node

CMD ["npm", "start"]
# CMD ["nodemon", "-L", "app.js"]
EXPOSE 3000
