# 람다표현식

## 들어가기

> [자바 8 인 액션](http://www.hanbit.co.kr/store/books/look.php?p_code=B1999551123)의 람다표현식 부분(1~3장)을 요약하였습니다.

프로그래밍 언어의 핵심은 값을 바꾸는 것이다. 이 값을 `일급 값`이라고 부른다.   
하지만 자바에서는 값을 다루는 `메서드와 클래스는 값이 될 수 없다`.  
런타임에 메서드를 전달할수 있다면 프로그래밍에 유용하게 활용할 수 있다.

[코드 링크](https://github.com/java8/Java8InAction/blob/master/src/main/java/lambdasinaction/chap1/FilteringApples.java)

간단하게 람다식으로 구현되는 것을 살펴보자  
사과의 색상이 green인 것을 필터링하는 메서드와 무게가 150이 넘는 메서드를 각각구하는 메서드가 있다.
```diff
public static List<Apple> filterGreenApples(List<Apple> inventory){
    List<Apple> result = new ArrayList<>();
    for (Apple apple: inventory){
+            if ("green".equals(apple.getColor())) {
            result.add(apple);
        }
    }
    return result;
}

public static List<Apple> filterHeavyApples(List<Apple> inventory){
    List<Apple> result = new ArrayList<>();
    for (Apple apple: inventory){
-            if (apple.getWeight() > 150) {
            result.add(apple);
        }
    }
    return result;
}
```
필터링 조건을 제외하고는 중복되는 코드가 된다.
```java
public static List<Apple> filterApples(List<Apple> inventory, Predicate<Apple> p){
    List<Apple> result = new ArrayList<>();
    for(Apple apple : inventory){
        if(p.test(apple)){
            result.add(apple);
        }
    }
    return result;
}  

filterApples(inventory, (Apple a) -> "green".equals(a.getColor()));
filterApples(inventory, (Apple a) -> a.getWeight() > 150)
```
중복 코드를 제거하고 조건을 지정하는 메서드를 따로 정의하지 않고 익명 람다식으로 전달하여 사용하는 쪽에서 짧고 간결하여졌다.  

## 단계별로 보는 람다로 가는 길

### 첫번째 요구사항
```java
public static List<Apple> filterGreenApples(List<Apple> inventory){
    List<Apple> result = new ArrayList<>();
    for (Apple apple: inventory){
        if ("green".equals(apple.getColor())) {
            result.add(apple);
        }
    }
    return result;
}
```
### 두번째 요구사항의 추가
- 다른 색상을 필터링 해달라는 요구사항의 추가
```java
public static List<Apple> filterApplesByColor(List<Apple> inventory, 
    // color 파라미터 추가
    String color){
    List<Apple> result = new ArrayList<>();
    for(Apple apple: inventory){
        if(apple.getColor().equals(color)){
            result.add(apple);
        }
    }
    return result;
}
```
- 무게 별로 필터링해달라는 요구사항의 추가
```java
public static List<Apple> filterApplesByWeight(List<Apple> inventory, 
int weight){
    List<Apple> result = new ArrayList<>();
    for(Apple apple: inventory){
        if(apple.getWeight() > weight){
            result.add(apple);
        }
    }
    return result;
}
```
파라미터와 필터링 조건을 제외하면 `DRY`한 코드가 되었고 내부 탐색 과정의 성능을 개선한다고 하면 두 메서드 `전부 고치게` 돤다.

### 세번째 가능한 모든 속성으로 필터링
```java
public static List<Apple> filterApplesByColor(List<Apple> inventory, 
    String color, int weight, boolean flag){
    List<Apple> result = new ArrayList<>();
    for(Apple apple: inventory){
        if(apple.getColor().equals(color)){
            result.add(apple);
        }
    }
    return result;
}
```
### 네 번째 추상적 조건으로 필터링(동작 파라미터)
- 코드/동작 전달, 한 개의 파라미터 다양한 동작
```java
interface ApplePredicate{
    public boolean test(Apple a);
}
static class AppleRedAndHeavyPredicate implements ApplePredicate{
    public boolean test(Apple apple){
        return "red".equals(apple.getColor()) 
                && apple.getWeight() > 150; 
    }
}

List<Apple> redAndHeavyApples = filter(inventory, new AppleRedAndHeavyPredicate());
```
인터페이스 설계와 클래스를 구현해야하는 번거로움

### 다섯번째 익명 클래스 사용
```java
List<Apple> redApples2 = filter(inventory, 
    new ApplePredicate() {
        public boolean test(Apple a){
            return a.getColor().equals("red"); 
        }
});
```
- 문제점 1 : 여전히 긴 코드
- 문제점 2 : 익숙하지 않은 익명 클래스
  
### 여섯 번째 람다 표현식
```java
public static List<Apple> filter(List<Apple> inventory, ApplePredicate p){
    List<Apple> result = new ArrayList<>();
    for(Apple apple : inventory){
        if(p.test(apple)){
            result.add(apple);
        }
    }
    return result;
}    

List<Apple> redApples2 = filterApples(inventory, 
    (Apple a) -> "green".equals(a.getColor()))
```

## 람다
### 람다란?
람다표현식은 메서드로 전달할 수 있는 익명 함수를 단순화한 것
특징
- 익명 : 보통의 메서드와 달리 이름이 없으므로 익명이라 표현
- 함수 : 메서드처럼 특정 클래스에 종속되지 않으므로 함수라고 부름
- 전달 : 람다 표현식을 메서드 인수로 전달하거나 변수로 저장할 수 있다
- 간결성 : 익명클래스처럼 많은 자질구레한 코드를 구현할 필요가 없다.
### 어디에, 어떻게?
- 함수형 인터페이스 : 정확히 하나의 추상 메서드를 지정하는 인터페이스
  람다 표현식으로 함수형 인터페이스의 추상 메서드 구현을 직접 전달
  전체 표현식을 함수형 인터페이스의 인스턴스로 취급
  ```java
    Runnable r = () -> System.out.println("Hello!");

    Runnable r2 = new Runnable(){
        public void run(){
            System.out.println("Hello!")
        }
    };
    ```
- 함수 디스크립터  
  람다 표현식의 시그니처를 서술하는 메서드를 함수 디스크립터라고 부른다.  
  에를 들어 Runnable 인터페이스의 추상 메서드 run은 인수와 반환값이 없으므로 인수와 반환값이 없는 시그니처로 생각할 수 있다.

### 실행 어라운드 패턴
  
코드 A | 코드 B |
---------|----------|
 초기화/준비 코드 | 초기화/준비 코드 | 
 작업 A | 작업 B | 
 정리/마무리 코드 | 정리/마무리 코드 | 
- 동작 파라미티화를 기억
- 함수형 인터페이스를 이용해서 동작 전달
- 동작 실행
- 람다 전달

### 함수형 인터페이스 사용
스킵

### 형식 검사, 형식 추론, 제약
- 형식 검사  
  람다가 사용되는 컨텍스트를 이용해서 람다 형식 추론
```java
filter(inventory, (Apple a) -> "green".equals(a.getColor()))

interface ApplePredicate{
    public boolean test(Apple a);
}
public static List<Apple> filter(List<Apple> inventory, ApplePredicate p){
    List<Apple> result = new ArrayList<>();
    for(Apple apple : inventory){
        if(p.test(apple)){
            result.add(apple);
        }
    }
    return result;
}      
```
  1. 람다가 사용된 컨텍스트는? 우선 filter의 정의를 보자  
  2. 대상 형식은 ApplePredicate
  3. ApplePredicate 인터페이스의 추상메서드는?  
  4. Apple을 인수로 받아 boolean을 반환하는 test 메서드
  5. 함수 디스크립터는 Apple -> boolean 람다 시그니처 일치, 형식 검사 완료
- 형식 추론 : 대상 형식을 이용해서 함수 디스크립터를 알 수 있으므로 컴파일러는 람다의 시그니처도 추론할 수 있다.
  ```java
    Comparator<Apple> c = (Apple a1, Apple a2) -> a1.getWeight().compareTo(a2.getWeight());
    Comparator<Apple> c = (a1, a2) -> a1.getWeight().compareTo(a2.getWeight());
  ```
- 지역 변수 사용
    자유 변수를 활용 가능, 이와 같은 동작을 람다 캡처링이라 함