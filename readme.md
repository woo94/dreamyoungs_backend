### 꿈많은청년들 Backend 과제
#### 응시자: 양승우(bestman21c@gmail.com)


### 프로젝트 소개
이 프로젝트는 총 3가지 파트로 구성되어 있습니다: 

Backend, Frontend, API documentation

준비물: 

- Docker Engine과 Docker compose를 필요로 하므로 Docker desktop를 이용하는 것을 권장합니다.

- 다음의 port은 다른 process에서 사용중이 아니어야 합니다(3000, 8080)


#### Backend
`npm run docker:up` command를 통해 docker-compose.yaml 파일에 정의된 application을 실행시킵니다. 


#### Frontend
`npm run test-browser` command를 통해 [http://localhost:3000](http://localhost:3000)에서 API playground를 사용 할 수 있습니다.


#### API documentation
project directory에서 apidoc폴더에 있는 index.html을 열어서 사용이 가능합니다. 