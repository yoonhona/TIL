# jest 설정

##  바벨 설정 사용
jest 테스트를 돌리는 환경은 node.js이고 테스트의 대상이 되는 코드는 대개 바벨 +
webpack + 프론트 프레임워크(React, Vue, Angular 등)등의 복합적인 구성으로
설정되어있는 환경일 것이다.

jest는 테스트 프레임 워크이기에 이런 환경구성에 대해서는 알지 못한다.  
그렇기에 프로젝트의 환경구성을 어떻게 하였는지 jest에 알려주어야 한다.

설정값중
[transform](https://jestjs.io/docs/en/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object)이
그 역할을 하는 속성이다.

object 형태이고 매핑되는 파일과 그 파일을 변환해주는 툴을 지정해주면 된다.

바벵의 경우 [babel-jest](https://www.npmjs.com/package/babel-jest)
플러그인을 추가한후
```bash
yarn add --dev babel-jest
```
transform 설정을 추가한다.  
babel-jest 플러그인은 기본적으로 프로젝트의 .babelrc 가져오고  
추가적이 설정도 가능하다.

```js
// jest.config.js
module.exports = {
    ...
    transform: {
        "^.+\\.[t|j]sx?$": [ // 매핑될 파일
            "babel-jest",  // babel-jest 지정
            { // babel 추가 설정
              // 여기서는 바벨의 설정파일 경로를 지정 함
              configFile: "./config/.babelrc.json" 
            }, 
        ],
    },
};

```

## 소스코드 경로 관련

테스트 대상 코드를 import 경로를 상대 경로가 아닌 절대경로로 지정하기 위한
설정으로 `moduleNameMapper`가 있으며

아래와 같이 테스트 코드를 작성할 때 테스트 대상 코드는 `src/sum.js`이고,  
하지만 절대 경로로 `src`위치를 지정해주지 않으면 jest는 해당 파일을 찾을 수
없기에  
`Cannot find module 'src/sum'`이라고 테스트를 실행할 수 없다는 경고를
노출한다.
```js
import sum from "src/sum";

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});

```
이제 설정에서 `moduleNameMapper` 추가혀여 `src` 경로를 지정해주면 관련된
경고는 사라지고 테스트를 실행할 수 있는 환경이 구성된다.
```js
// jest.config.js
module.exports = {
    ...
    moduleNameMapper: {
        "src/(.*)": "<rootDir>/src/$1",
    },
}
```
