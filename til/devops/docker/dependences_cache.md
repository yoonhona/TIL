# Dockerfile

> [Dockerfile reference](https://docs.docker.com/engine/reference/builder/)를
> 참고하여 정리하였습니다.

## 명령어

### FROM
새로운 빌드 단계를 시작하는 명령으로 Dockerfile은 FROM으로 시작하여야 하며,

- FROM 앞에는 ARG만 올 수 있음
- Dockerfile 내에서 여러 이미지를 만들거나 다른 단계에서 dependency하여 사용할
  수 있다.
- `FROM [base image] AS [이름]` 로 이름을 정의한 후 다음 FROM에서 정의 된
  이름을 `FROM [이름]`하여 사용하거나, `COPY --from [이름]`하여 앞에서 작성된
  이미지를 복사하여 새로운 빌드 단계에서 사용할 수 있다.

### ARG
빌드 시 Dockerfile에 전달할수 있는 변수  
Dockerfile 하나 이상의 ARG를 가질 수 있음

- Default values  
  ARG는 기본 값을 가질 수 있고, 빌드 시 전달된 값이 없으면 기본 값을 사용
    ```dockerfile
    ARG user1=someuser
    ```
- Scopes
- 사용 법
- 빌드 캐시에 미치는 영향




### RUN
### ENV
### WORKDIR
### EXPOSE
### ENTRYPOINT
### ADD vs COPY


## .dockerignore

# docker file 작성 best practices

> 도커 공식 문서인
> [Best practices for writing Dockerfiles](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
> 참고 함

# layer

도커 image는 레이어로 구성되며,  
layer는 dockerfile 명령어를 기준으로하며  
이전 layer와 차이점을 기록

![](https://docs.docker.com/storage/storagedriver/images/container-layers.jpg)


# multi stage build

# npm 의존성 최적화

-----
참고


[Docker Compose BuildKit](https://www.docker.com/blog/faster-builds-in-compose-thanks-to-buildkit-support/)  
[what-is-docker-buildkit](https://brianchristner.io/what-is-docker-buildkit/)  
[modulecounts](http://www.modulecounts.com/)  
[node dockerfile 사이즈 최적화](https://medium.com/@iamnayr/a-multi-part-analysis-of-node-docker-image-sizes-using-yarn-vs-traditional-npm-2c20f034c08f)
