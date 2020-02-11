# ES6+를 품은 자바스크립트, 매력적인 언어가 되다

## 2.객체와 배열의 사용성 개선
### 2.1. 객체와 배열을 간편하게 생성하고 수정
#### 단축 속성명(shorthand property names)
- 객체 리터럴 코드를 간편하게 작성
- 객체 속셩명이 변수로 존재하면 변수이름만 작성
- 함수 속성 값에서 function 키워드 없이 선언 가능

::: details 예제

```javascript
const name = 'mkie'

const obj = {
  age: 21,
  name,
  getName () { return this.name},
}

function makePerson1 (age, name) {
  return {
    age : age,
    name: name,
  }
}

function makePerson2 (age, name) {
  return {
    age,
    name,
  }
}
```
:::

#### 계산된 속성명(computed property name)
- 객체의 속성명을 동적으로 결정

::: details 예제

```javascript
function makeObject1(key, value) {
  const obj = {}
  obj[key] = value;
  return obj;
}
function makeObject2 (key, value) {
  return {
    [key]: value
  }
}
```

:::

### 2.2. 객체와 배열의 속성값을 간편하게 가져오기
#### 전개연산자(spread operator)
- 배열이나 객체의 모든 속성을 풀어놓을 때 사용하는 문법
- 함수의 매개변수를 동적으로 전달할 때 유용
- 배열이나 객체를 복사, 병합 할 때 유용
- 객체 복사 시 중복된 속성명은 마지막 속성명의 값으로 들어감

::: details 예제

```javascript
// 함수 매개변수
Math.max(1, 3, 5)
const number = [1, 3, 5]
Math.max(...number)

// 복사
const arr1 = [1, 2, 3]
const obj1 = { age: 23, name: 'mike', inner: {
    name: 'inner',
    inner: {
      name: 'inner/inner'
    }
  }
}
const arr2 = [...arr1]
const obj2 = { ...obj1 }
arr2.push(4)
obj2.age = 80
// obj2.inner = 'test'
obj2.inner.inner = 'test' // shallow copy
console.log(obj1, obj2)

// 병합
const absObj1 = { age: 21, name: 'mike'};
const absObj2 = { hobby: 'soccer', name: 'joe'};
const absObj3 = { ...absObj1, ...absObj2};
console.log(absObj3)

```

:::

#### 배열 비구조화(array destructuring)
- 여러 속성값을 변수로 쉽게 할당할수 있는 문법
- 순서를 보장
- 기본값 정의 가능
- 나머지값(rest) 배열화

::: details 예제

```javascript
let a, b;
[a, b] = [1, 2];

const arr = [1]
const [a = 10, b = 2] = arr

const arr = [1, 2, 3]
const [a, , c] = arr

const arr = [1, 2, 3]
const [first, ...rest] = arr

```

:::

#### 객체 비구조화(object destructuring)
- 여러 속성값을 변수로 쉽게 할당할수 있는 문법
- 속성명을 다른 이름으로 지정이 가능
- 기본값 정의 가능

::: details 예제

```javascript

const obj = {age:21, name:'mike'}
const {age, name} = obj

const obj = {age:21, name:'mike'}
const {age: theAge, name} = obj

const obj = { age: undefined, name: null, grade: 'A'};
const { age = 0, name = 'no name', grade = 'F'} = obj

const obj = { age: undefined, name: null, grade: 'A'};
const { age: theAge = 0, name = 'no name', grade = 'F'} = obj

const defaultName = () => 'no name'
const obj = { age: undefined, name: null, grade: 'A'};
const { age: theAge = 0, name = defaultName(), grade = 'F'} = obj


const obj = { age: undefined, name: null, grade: 'A'};
const { age: theAge = 0, ...rest} = obj


const obj = [{ age: undefined, name: null, grade: 'A'}];
for(const {age, name} of obj) {
  console.log(age)
}

```

:::

#### 비구조화 심화 학습
- 배열, 객체가 중첩되어 있을 때도 사용 가능
- 객체 비구조화에서도 계산된 속성명 사용가능

## 3. 강화된 함수의 기능

### 3.1.매개변수에 추가된 기능
#### 매개변수 기본값
- 값이 undefined 일 때 기본값으로 설정 됨
- ES2015부터 함수 매개변수에 기본값을 줄 수 있음
- 기본값으로 함수 호출을 넣을 수 있고, 기본값이 필요한 경우에만 호출

#### 나머지 매개변수(rest parameter)
- 입력된 인수 중에서 정의된 매개변수 개수만큼을 제외한 나머지를 배열로 만들어 줌

#### 명명된 매개변수(name parameters)
- 객체 비구조화를 이용
- 선택적 매개변수의 활용도가 올라감(필숫값과 반대되는 의미로 있어도 되고 없어도 되는 매개변수)


### 2.2. 함수를 정의하는 새로운 방법: 화살표 함수
#### 화살표 함수의 코드가 여러 줄인 경우
- 전체를 중괄호로 묶고, 반환 값에는 return 키워드르 사용

#### this와 arguments가 바인딩되지 않는 함수
- this와 arguments가 바인딩 되지 않음
- arguments가 필요하면 나머지 매개 변수 사용

#### 일반 함수에서 this 바인딩 때문에 버그가 발생하는 경우
- 일반 함수의 this는 호출 시점에 사용된 객체로 바인딩
  - 객체에 정의된 일반 함수를 다른 변수에 할당해서 호출하면 버그가 발생할 수 있음

#### 생성자 함수 내부에서 정의된 화살표 함수의 this
- 생성장 함수 내부에서 정의된 화살표 함수의 this는 생성된 객체를 참조

#### setInterval 함수 사용 시 this 바인딩 문제
- setInterval 인자는 전역환경(window) 실행되기 때문에 this는 window 객체를 참조
- 기존에는 클로저(closure)를 사용하여 해결

::: details 클로저 개념

함수가 생성되는 시점에 접근 가능했던 변수들을 생성 이후에도 계속해서 접근할 수 있게 해주는 기능  
접근할 수 있는 변수는 그 함수를 감싸고 있는 상위 함수들의 매개변수와 내부 변수들
```javascript
function makeAddFunc(x) {
  return function add(y) {
    return x+y
  }
}
const add5 = makeAddFunc(5);
console.log(add5(1));  // 6
````

  :::
