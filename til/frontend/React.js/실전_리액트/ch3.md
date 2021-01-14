# 3. 중요하지만 헷갈리는 리액트 개념 이해하기

> 개인 [실전 리액트로 프로그래밍 개정판](http://www.yes24.com/Product/Goods/74223605) 학습 기록용입니다.  
> 상세한 내용은 [실전 리액트로 프로그래밍 개정판](http://www.yes24.com/Product/Goods/74223605) 구매해주세요.

## 3.1 상탯값과 속성

UI 데이터가 변경되면 DOM 요소를 변경해야 하는데,  
이를 직접 수정하다보면 비즈니스 로직과, UI 수정로직이 뒤섞이게 되는데,  
리액트 컴포넌트를 통해 자동으로 갱신해주게되며 이것이 리액트의 가장 중요한 역할

### 3.1.1 리액트를 사용한 코드의 특징

dom 핸들링(jQuery)을 직접하게 되면 명령형 프로그래밍 형태로 코드를 짜게되지만  
리액트를 통해 컴포넌트를 작성하게되면 선엄형 프로그래밍으로 코드를 작성하게된다. 
> 참고1.[명령형 프로그래밍 vs 선언형 프로그래밍]([https://link](https://www.freecodecamp.org/news/imperative-vs-declarative-programming-difference/))
> 참고2. [명령형 프로그래밍 vs 선언형 프로그래밍 - React관련]([https://link](https://codeburst.io/declarative-vs-imperative-programming-a8a7c93d9ad2))

### 3.1.2 컴포넌트의 속성값과 상탯값

#### 속성값과 상탯값으로 관리하는 UI 데이터

