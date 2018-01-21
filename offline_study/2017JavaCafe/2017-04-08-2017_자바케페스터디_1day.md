* 1일차
  - 스프링으로 새로운 프로젝트를 시작시 스프링 세팅에 시간을 단축.
    물론 어느 정도 진행되면 프로젝트에 맞게 부트 설정을 세부적으로 변경하여야 한다.
  - **프로그램 설계시 DB 부터 시작하는 것이 아니다!!**
    vo, dto 생성 -> repository 생성 -> 서비스 생성 -> 서비스에 대한 테스트 코드 작성 및 테스트 실행 확인
    - *4일차에서 왜 우리나라에서 sql 중심적인 설계가 나오는지에 대한 이야기가 나왔는데, 프로젝트 시작시 진입 난이도가 가장 낮다는데 있다. 그러나 유지보수와 업무가 복잡해짐에 따라 중복되는 코드들이 계속 늘어나게 되고 그로 인한 비용은 점점 커져간다는 문제가 있다.*
  - vo와 dto를 나누자
    파라미터로 사용하는 dto와 정보를 불러올 때 사용하는 vo의 역할을 분리하는 것이 좋다.  
  - 테스트 코드에서(junit) db crud는 rollback 이 되는 것으로 알고 있는데 예전에 본 글이 있을텐데 찾아봐야겠다.
  - 부트 설정시 H2 DB를 선택했는데 프로그램을 띄우면 같이 올라오고 주소는 http://localhost:8000/h2-console jdbc url : jdbc:h2:mem:testdb
  이다.
  - application.properties
    - 포트 변경 : server.port=8000
    - 로그 레벨 : logging.level.org.springframework.jdbc=DEBUG
    - 의존성보기 : management.security.enabled=false (http://localhost:8000/beans)
- 작성 일 : 2017년 4월 8일
- 수정 일 : 2017년 5월 21일
