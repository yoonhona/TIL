## 자바카페 스프링 부트 스터디 진행 소스 업로드
2017년 자바카페의 스프링 부트의 스터디에 참석하면서 진행하는 
소스 업로드 및 내용 기록

* 1일차
  - 스프링으로 새로운 프로젝트를 시작시 스프링 세팅에 시간을 단축.
    내 경험에(잠깐 있었던 스타트업..) 프로젝트를 진행하면서 계속 세팅을 손봤던것 같다. 신입 둘이서 한 한달간은 이래저래 손 본것 같다.
    물론 어느 정도 진행되면 프로젝트에 맞게 부트 설정을 세부적으로 변경하여야 한다.
  - **중요 프로그램 설계시 DB 부터 시작하는 것이 아니다!!**
    우리나라의 경우 DB에서 프로그램이 시작하는 경우가 많은데
    (나도 항상 그렇게 만들었다. 반성...)
    프로그램을 설계 할 때 객체지향적인 설계를 어떻게 해나가는지 보여주셨다.
    객체 생성 -> 서비스생성(자바 상에서 돌아가는 로직 구현 여기서는 article을 map에 담아 봄) -> 서비스에 대한 테스트 코드 작성 및 테스트 실행 확인
    이렇게 자바 상에서 돌아가는 것을 확인하고 DB로 이어졌다.
  - vo와 dto를 나누자
    지금 회사서는 vo와 dto가 사실상 동일한 스팩이다.(같이 사용한다)
    파라미터로 사용하는 dto와 정보를 불러올 때 사용하는 vo를 서로 역할을 분리하는 것이 좋다.
  - 테스트 코드에서(junit) db crud는 rollback 이 되는 것으로 알고 있는데 예전에 본 글이 있을텐데 찾아봐야겠다.
  - 부트 설정시 H2 DB를 선택했는데 프로그램을 띄우면 같이 올라오고 주소는 http://localhost:8000/h2-console jdbc url : jdbc:h2:mem:testdb
  이다.
  - application.properties
    - 포트 변경 : server.port=8000
    - 로그 레벨 : logging.level.org.springframework.jdbc=DEBUG
    - 의존성보기 : management.security.enabled=false (http://localhost:8000/beans)

* 2일차
  - HTTP 통신(공부 필요)
    - 텍스트를 서버와 주고 받음
    - header, body......
    - 통신 후 연결을 끊기 때문에 포트의 재사용이 가능( 게임의 경우 사용자의 제한 - 포트의 제한으로 인한 )
  - 세션
    - HTTP 헤더값에 쿠키 값이 전송되고 쿠키에 담긴 세션 키값으로 세션 정보를 읽어옴
  - REST
    - ie.....에서 지원 안 함...
  - WAS
    - javax.servlet interface service 메서드( 구현체가 http 통신시 모든것을 받아서 처리 함)
    - h2 : web servlet
    - 스프링에서는 dispatcher servlet
  - model 1,2
    - 1) java 에서 html 까지 그려서 표현 함, jsp 에서 db 연결 및 서비스 로직을 구현
    - 2) 현재의 MVC 패턴을 2라고 한다.
  - DispatcherServlet
    - doDispatch
    - 토비 스프링 2권 부분
  - Spring boot 에서는 jsp 사용을 제한한다 (표준이 아니다.)
    요즘의 경량 was(jetty 등)에서는 jsp 컴파일 하는 과정이 복잡하기에 제외 되었다.
    jsp는 webapp이라는 구조적 강제성
  - Builder 패턴(이펙티브 자바 참고)
    - 파라미터 3개 이상이 되면.
    - lombok의 Builder 어노테이션
  - 숙제
    - 게시물 리스트 처리, 페이징 처리까지(한 페이지 20개)