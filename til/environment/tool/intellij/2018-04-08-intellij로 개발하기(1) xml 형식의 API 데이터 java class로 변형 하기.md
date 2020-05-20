---
title:intellij로 개발하기(1) xml 형식의 API 데이터 java class로 변형 하기   
date:2018-04-08
---

개인 프로젝트를 진행하면서 정부3.0 api를 사용하면서 클래스에 데이터를 담을 필요가 생겼다.  
예제 데이터가 json 형식으로 제공하면 [창천향로님 글](http://jojoldu.tistory.com/273)처럼 plugin을 설치하여 편하게 데이터 클래스를 작성할 수 있지만 xml을 변환하는 plugin을 찾울 수 없었다.  
문제는 공공데이터 홈페이지에서 데이터 예제를 xml 형식으로만 제공하여 일일히 클래스를 작성하여야 하는 것인데 [가이드 글을](https://www.jetbrains.com/help/idea/generating-java-code-from-xml-schema.html) 찾아보니 해당 기능이 있어서 플러그인이 없는 것 인듯 하다.

1. JAXB 서비스 실행  
  [해당 기능 안내](https://www.jetbrains.com/help/idea/xml-java-binding.html)에서 보듯이 xml java bindeing 기능을 쓰려면 Web Services라는 기능을 활성화 하여야 한다.  
  ![설정창](https://drive.google.com/uc?id=1J3X4ZLIrClcZu8yFbr24BTViGJxsADyL)
  
2. xml -> xsd   
   예제 데이터를 xml 파일로 작성 후 우 클릭을 하면 Generate XSD Schema from XML file 메뉴가 보인다.    
   해당 기능을 이용하여 xsd 파일을 만든다.
   [XSD의 wiki 설명](https://ko.wikipedia.org/wiki/XML_%EC%8A%A4%ED%82%A4%EB%A7%88_(W3C))
3. xsd -> java
   생성된 xsd 파일에서 우 클릭 WebServices - Generate Java Code From XML Schema Using JAXB   
   ![](https://drive.google.com/uc?id=1Qeak3gB0v0uR16BDiajxPk6PKTlaa-GK)   
   클릭하면 해당 창이 뜨게 되고 package를 지정해주면 해당 package에 XML에 매핑되는 class를 자동 생성해준다.
   
   ![](https://drive.google.com/uc?id=1BiKhoRM1rm1i4m9UXWj1_bLP-UCMHBp7)   
   
   ![](https://drive.google.com/uc?id=1rKLrxkEn4MYJ4HgLueZZn4pxW2Grfise)   
   
   ![](https://drive.google.com/uc?id=1nLbt5Prbnf11ELbQGLf9Gc3UXQvwFMsY)   
   
   