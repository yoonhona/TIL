#### 세미나 정보
title : 직접 해보면서 배우는 실전 Spring Cloud on Kubernetes
date : 2018년 03월 24일
1. 주제 : 직접 해보면서 배우는 실전 Spring Cloud on Kubernetes 
2. 일시 : 2018년 03월 24일
3. 주최 : 한빛출판네트워크
4. 장소 : 한빛빌딩 A동 2층 40인실
5. 비고 : [세미나 커리큘럼](http://www.hanbit.co.kr/store/education/edu_view.html?p_code=S5975335528), 지옥 문 앞까지의 안내?

---

### minikube(로컬 내 Kubernetes 구성 툴) MSA 구성해보기
- 전체 흐름
    1. minikube, kubectl 설치, virtualbox 설치, jenkins 설치 및 blue ocan 플러그인 설치
    2. 강사님 [repo](https://github.com/hub-tea?tab=repositories) 전부 fork
    3. fork 한 프로젝트의 github, docker hub 계정 본인 계정으로 변경 후 push
    4. 로컬에서 docker login 후 jenkins 빌드
    5. minikube dashboard로 서비스 로드 확인 및 서비스 url 접속 동작 확인 및 스크링 클라우드 내용 확인
- 실습 순서
    1. [k8s](https://github.com/hub-tea/k8s) : minikube 관련 스크립트
        - start-cluster.sh 실행 ( 자신의 환경에 맞게 사양조절이 필요 함. 현재 맥 15 pro에 맞춰져 있음 )
        - namesapce.yaml ( namespace 등록 필요 [namespace ](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/)  [namespace 등록 법](https://kubernetes.io/docs/tasks/administer-cluster/namespaces/) 
        - enable_addons.sh ( dns를 위한 ingress, 모니터링을 위한 heapster 활성 )
        - minikube dashboard 입력하여 대쉬보드를 확인 해볼수 있음    
         여기서 kube-system 등의 기본 네임스페이스 하위 서비스들이 정상 동작하는지 확인 필요.    
         기본 서비스가 동작하지 minikube를 재 시작 해보거나 그래도 동일한 증상이면 재 설치를 해야함.    
         재 설치시 minikube 설치 파일 및 설정파일 (맥 : /user/계정/.minikube )까지 지워주고 설치 필요 
    2. [spring-cloud-config](https://github.com/hub-tea/spring-cloud-config) : 각 서비스 기동 시 서비스에 맞는 cnfing를 보내주는 서버, [해당 repo](https://github.com/hub-tea/spring-cloud-config-repo)에서 서비스에 맞는 기동정보를 가져 옴
          

### 강의 및 설치

설치 필요  
- [SDKMAN](http://sdkman.io/sdks.html)
    - sdk list java - 설치 가능 자바 버전 검색 
    - sdk install java [version] - 위에서 검색한 리스트 중 선택

MSA
- [12 Factors App 방법론](https://12factor.net/ko/)
- 준비
    - 실력 좋은 조직이 운영 가능(DevOps 가능)
    - 커뮤니케이션 문화
    - 서비스, 솔루션 개발에 적당 (SI 개발에서는 적당하지 않음)
    - 테스트가 어려움. 경험이 많은 개발자가 필요
    - 여러가지 언어와 신길술 난무 - 계속하여 공부
    
SpringCloud
- [Netflix OSS](https://netflix.github.io/) 

클라우드 네이티브 아키텍쳐
- 레이아웃 아키텍쳐
- 클라우드를 적극 활용해 자동화

Docker
- OS 가상화라고 생각하면 쉽다.

CI / CD
- Git, Svn -> Jenkins, GitLab ... -> Docker Hub, Nexus -> 클라우드
- jenkins 블루오션
- Kubernates dashboard
- github 등으로 배포의 형상관리, 배포의 코드화
- jekinksfile grovy로 된 스크립트 파일 ( 위에서 배포의 코드화, 형상관리가 jenkinsfile을 통해 가능해짐. )

minikube
- 실행 하면 minikube 디렉토리 생성 후 설정파일을 생성
- kube 디렉토리 생성 후 현재 실행된 클러스터의 설정파일 생성

helm
- Kubernetes 패키지 관리자 