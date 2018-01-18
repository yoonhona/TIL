[thymeleaf](http://www.thymeleaf.org/doc/tutorials/2.1/usingthymeleaf.html#introducing-thymeleaf)

spring boot로 토이 프로젝트를 하면서 HTML로 뷰를 작성하고 싶어서 선택한 스프링 템플릿 엔진으로 공식문서에서 XML / XHTML / HTML5 으로 템플릿을 제공한다고 되어 있다.   
HTML로 선택한 이유는 이미 많은 곳에서 뷰단을 jps가 아닌 더욱더 쉬운 템플릿으로 바꿀고 있는 것으로 알고 있다. 뷰단이 어려우면 디자이너, 퍼블리셔 등 프로튼 작업자들과의 협업이 어려울 것이다. 뷰에 서버 용 태그들로 덕지덕지 칠해져 있으면 퍼블리셔가 이것을 이해하기 위해 시간을 쏟거나 그것을 만든 개발자에게 물어봐야 된다.   
하지만 순수하게 html로만 되어 있다면 그럴 필요가 없이 바로 작업을 진행할 수 있을 것이다.  

----

thymeleaf 의 기본 mode는 HTML5로 뷰를 호출하면 자동으로 해당 뷰의 문법을 체크하게 된다. 이게 여간 까다로운게 아니다. 누락된 사항이 아닌 필요에 의해 추가된 라이브러리 등의 사용을 위해 기입된 사항까지 문법 오류로 잡아서 실행이 안 될 경우가 있어서 모드를 바꾸고 파싱을 다른 라이브러리로 전환하자.  
[참고URL1](https://stackoverflow.com/questions/31857943/settemplatemodelegacyhtml5-not-working-with-thymeleaf-spring-4), 
[참고URL2](https://stackoverflow.com/questions/28624768/thymeleaf-strict-html-parsing-issue)  
application.properties 옵션 추가  
spring.thymeleaf.mode=LEGACYHTML5  

porm.xml deepndency 추가  
``` xml
<dependency>
     <groupId>net.sourceforge.nekohtml</groupId>
     <artifactId>nekohtml</artifactId>
     <version>1.9.21</version>
 </dependency>

```

[nekohtml](http://nekohtml.sourceforge.net/index.html)
공홈에 보면 html을 파싱하면서 누락된 요소들을 수정해준다고 되어 있다. 그 외의 요소들은 추후에 살펴보고자 한다.