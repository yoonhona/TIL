# 새로운 CSS 레이아웃

## 1.우리가 지나온 길
### 한계 벗어나기
- 초기 CSS 레이아웃
  -  float과 postion의 조합으로 이루어짐
  - 컨텐츠 영역의 오른쪽 혹은 왼쪽에 마진을 주고 `사이드바 고정`
  - 푸터를 두거나 컨텐츠보다 사이드바가 길어지면서 문제가 생기가 되고 `고정 높이`를 사용하여 문제를 해결 함
  > overflow 되는 페이지를 어렵지 않게 볼 수 있게 됨
- 플로팅 레이아웃
  - [가짜 컴럼](https://alistapart.com/article/fauxcolumns) 이미지를 레이아웃 뒤쪽에 타일 형태로 배치
  - 화면 전체를 채우는 유동 디자인
  > [article : All About Floats](https://css-tricks.com/all-about-floats/)
- 아이폰 출시 `반응형` 웹 디자인의 등장
  - 유동 디자인은 큰 화면에서 너무 과하였고, 가짜 컬럼은 유연하지 못하였기에 모든것을 원점으로 돌림
  - 화면 크기에 따라 많은 작업을 다시하며 더 쉽게 만들기 위한 고민의 시작
### 플롯의 문제
- 크기 같은 요소를 한 줄로 나란히 정렬 [예제 바로 보기](https://yoonhona.github.io/new-css-layout-code/chapter1/float2.html)
- 요소 중 크기가 바뀌면 공백이 생기게 됨 [예제 바로 보기](https://yoonhona.github.io/new-css-layout-code/chapter1/float3.html)
### 플롯 문제 해결
#### [clearfix](https://css-tricks.com/all-about-floats/#article-header-id-2) [예제 바로 보기](https://yoonhona.github.io/new-css-layout-code/chapter1/inline-block.html)
- float을 card에 적용, 라인을 감싸는 wrapper를 만들고 clearfix 적용
- 문제점 elemtnt간의 공백을 인식하여 너비가 100%를 넘어가면서 레이웃이 깨짐
- 위의 문제점을 해결하기 위해서는 코드상에서 엘리먼트간에 공백을 제거 필요
#### display: table [예제 바로 보기](https://yoonhona.github.io/new-css-layout-code/chapter1/display-table.html)
- HMTL Table에는 diplay:table;이라는 CSS 속성이 적용, div, ul 등의 요소에도 적용 가능
- ul 요소를 감싸는 div에 display: table
- ul 요소 display: table-row
- li 요소 display: table-cell

### 마치며
- 오래된 브라우저까지 지원하려면 이러한 기법을 익혀두어야 함
- 전문적인 레이아웃 시스템에 많이 부족 함

----

## 2.레이아웃 제작의 현재
### CSS 아키텍쳐
> article : [블로그 글 - CSS 방법론](https://wit.nts-corp.com/2015/04/16/3538)
- OOCSS, SMACSS, BEM
- 기존 방식으로 작성 시 CSS와 마크업간 강결합이 일어남, 아키텍쳐를 사용하여 재사용성이 좋아지는 등의 이점
### 전처릭와 후처리기
- 전처리기 : SASS, LESS 등 CSS가 아닌 언어를 CSS로 컴파일 해주는 도구
- 후처리기 : [Autoprefixer](https://github.com/postcss/autoprefixer)등 css파일이 작성 된 후 적용되는 도구  
- 아러한 도구로 인해 작업 생산량 향상
### 컴포넌트 우선 디자인
- 아토믹 디자인
- 기존의 페이지 단위로 사고하던 웹 디자인과 다르게 가장 작은 구성요소 부터 디자인을 권장
### 프레임워크
- 부트스트랩, 파운데이션 등을 사용하여 적은 지식으로 빠르게 웹사이트를 만드는 이점
- 플로팅 기반의 레이아웃 제작의 수많은 작업을 대신
### 성능
> [구글 dev.web - Performance](https://developers.google.com/web/fundamentals/performance/why-performance-matters/)
### 접근성
- 누구나 쓸 수 있는 웹사이트
- 6장에서 자세히
### 자동으로 업데이트되는 브라우저
- 최신 브라우저들은 자동으로 업데이트를 지원
- 하지만 OS가 구식이거나 내부 규정에 따라 구식 브라우저를 사용하는 사용자를 고려해야 함
- 7장에서 브라우저 기능 지원에 관한 내용
### CSS 학습의 외주화
- 프레임워크와 도구에 의존하여 그 이상의 가능성을 놓치지 않기를 바람

---

## 3.새로운 레이아웃
### CSS의 양식화 문맥
#### 블록 양식화 문맥(BFC) 
- 요소에 새로운 BFC 작성하면 그 요소의 자식 요소에 적용할 독립적인 레이아웃 환경을 구성
- 새로운 BFC를 만들 수 있는 조건
    1. 루트 요소일 때
    2. 플로팅되어 있을 때
    3. position: absolute 속성이 적용되어 있을 때
    4. display: inline-block 속성이 적용되어 있을 때
- [예제 바로 보기](https://yoonhona.github.io/new-css-layout-code/chapter3/bfc.html)
  - 예제에서 BFC를 만드는 방법 overflow: hidden, float: left 외에 브라우저가 지원한다면 display: flow-root를 사용하면 다른 부작용없이 사용가능
#### 흐름 내부와 외부

