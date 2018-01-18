#### 세미나 정보
1. 주제 : java 9, spring 5
2. 일시 : 2017년 11월 26일
3. 주최 : KSUG
4. 장소 : 

---

##### 자바 9

    - Project Jigsaw
    - jlink 
    - Multi-Release Jar Files ( Jvm에서 구동될 java버전에 따른 )
    - jshell 
    - Concurrency
    - Enhanced Deprecation : @Deprecated 태그가 더 다양화되고 자세해졌다. 기존의 api가 많이 정리 될 듯 하다. 
    - Make G1 the Default Garbage Collector : 자바 8에서 엄청난 성능 향상이 있었다.
    - Better String Performance : String 성능향상을 위해서 Comppact String
    - Smaller Features : JVM 상에서 log를 관리(jep 158)
    - java9에서 패키지(파일 형태) 구조의 변화로 인해 다른 버전과 다르게 매우 더디게 적용이 될 듯 하다.
    - SHA-1 disable
    - applet deprecate

#### HTTP/2 세대의 Java
개략    

    - 네이버 서비스가 http2로 되어있다. 
    - 2015년 5월에 스펙 공표 ( RFC 7240 )
    - Header 등의 정보가 binary protocol
    - Keep-Alive 관련 헤더들은 무시됨
    - h2 = HTTP/2 (with TLS), h2c = clear text HTTP/2
    - HTTP/2 왜??? : 더나은 성능
자바에서의 HTTP/2

    - 서블릿 4.0 : 서버 Push
    - java9 : httpclient, alpn 지원
    - OkHttp, RestTemplate
    - H2 지원에 따른 api 사용법

#### JPA2.2, JSON-B, JSON-P
JPA 2.2
    
    - @Repatable 
    - java 8 date time (ZonedDateTime 보류), jdbc time zone 설정 필요
    - Stream for query result 
        - 고려사항

JSON-B ( json binding ), JSON-P ( json processing )  

    - Serialize, Deserialze
    - ObjectMapper
    - patch : 리소스를 부분적으로 변경하기위한 메소드
        - json patch
    - json pointer
    - json merge patch
    - jsonCollectors
    - 아직은 json-b, p는 나중에... 아직 성능이나 소스도 나이스하지 않아 사용은 추후에

#### Spring 5 New Features	
왜 이렇게 바뀌어 가냐?? 마이크로 서비스 즉 클라우드 환경에 맞게 변화되어 가고 있다.

유튜브 - 혼돈의 제왕 (넷플릭스가 겪은 클라우드 환경의 내용), cloud native java
도서 - release it (번역서 있음), Pivotal PDF 문서
SpringOne 컨퍼런스 미국에서 하고 내년 초에 한국에서..
pivotal 기술 블로그에 많은 것들이 있음 <http://engineering.pivotal.io/>

    - server push
    - servlet mapping
    - bean validation 2.0 : lambda, annotation ....
    - xml 설정시 버전 명시 하지 않고 설정하도록 수정 됨.
    - spring-jcl 에서 로깅 을 자동으로 클래스를 지정해준다.
    - @Indexed 어노테이션을 통해 프로그램 로딩 시 스캔할 클래스를 지정할 수 있다.
WEB

    - HTTP/2 - tomcat9.0, Jetty 9.3, Undertow1.4
    - multipart : 파일 사이즈에 따른 exception 추가
    - PathPeattern : url 패턴 매칭 추가
    - ResponseStatusException
    - WebClien 추가
    - RowuterFunction
    - spring cloud gateway - api gateway 
    - spring cloud function - aws 람다 같은
    - pcf dev - 로컬에서 클라우드 환경을 테스트 할 수 있는 오픈소스 툴