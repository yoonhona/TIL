* 2일차
  - HTTP 통신
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
- 작성 일 : 2017년 4월 15일
