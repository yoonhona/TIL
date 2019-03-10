# RxJava
## Single Class
![싱글 클래스 마블 다이어그램](https://raw.github.com/wiki/ReactiveX/RxJava/images/rx-operators/Single.legend.png)
> [ReactiveX 공식 홈페이지 싱글 클래스 Doucment 싱글 클래스 마블 다이어그램](http://reactivex.io/documentation/ko/single.html)

- Single 클래스는 오직 1개의 데이타만 발행하도록 한정
- 데이터 하나 발행과 동시에 종료(onSuccess)됨으로 onNext(), onComplete()가 onSucess()로 통함
  
### just() 함수
- Single 클래스를 생성하는 정적 팩토리 함수
```java
Single<String> source = Single.just("just");
source.subscribe(System.out::println);
```
### Observable에서 Single 클래스 사용
```java{3,10,21,27,33}
// 1. Observable -> Single
// 기존 Observable에서 첫 번째 값을 발행하면 onSuccess 이벤트를 호출한 후 종료
Observable<String> stringObservable = Observable.just("Observable -> Single");
Single.fromObservable(stringObservable)
        .subscribe(System.out::println);

// 2. just() 함수를 통해 생성된 Observable에 single() 함수를 통한 Single 사용
// default value를 인자로 가짐
Observable.just("single()")
        .single("default Item")
        .subscribe(System.out::println);
//        Observable.just(1, 2, 3, 4, 5)
//                .single(3)
//                .subscribe(System.out::println);

// 3. first()
// 여러개의 데이터를 발행하는 Observable 객체를 Single 객체로
// 첫 번째 데이터를 발행 후 onSuccess 이벤트 발생
// 3장에서 자세히
Observable.fromArray("red", "blue", "gold")
        .first("first")
        .subscribe(System.out::println);

// 4. empty()
// single() 함수를 통해 기본값을 가지는 Single 객체를 생성 함
Observable.empty()
        .single("default value")
        .subscribe(System.out::println);

// 5. take()
// 3장에서 자세히
Observable.just(new Order("oder 1"), new Order("oder 2"))
        .take(1)
        .single(new Order("default order"))
        .subscribe(System.out::println);
```

### Single 클래스 올바른 사용 방법
- 싱글 클래스에 여러 데이터를 발행하도록 하면 에러가 발생한다.
![](./image/2019-02-23-18-39-51.png)

> 함수? 메서드?  
> 리액티브 프로그래밍은 함수형 프로그래밍 기법을 활용하므로 용어를 혼용해서 사용할 수 있습니다.  
> 이 책에서는 함수형 프로그래밍에 가까운 리액티브 연산자는 함수라고 표기  
> 일반 자바 언어 기반은 메서드로 표기합니다.

## flatMap() 함수
![diagram](http://reactivex.io/documentation/operators/images/flatMap.c.png)
- fltMap() 함수는 결괏값이 Observable이므로 여러 개의 데이터를 발행할 수 있습니다.

```java{1,2}
Function<String, Observable<String>> getDoubleDiamonds 
        = ball -> Observable.just(ball + "<>", ball + "<>");
String[] balls = {"1", "2", "3"};
Observable<String> source = Observable.fromArray(balls).flatMap(getDoubleDiamonds);
source.subscribe(System.out::println);

1<>
1<>
2<>
2<>
3<>
3<>
```
- Function 인터페이스에 `<String, Observable<String>>` 제네릭 타입 선언
- source는 balls 배열 값을 가져온 후 `getDoubleDiamonds()` 함수를 활용 flatMap() 함수를 호출
- 함수형 프로그래밍에서는 함수가 `일급 객체`

```java{2,3,4,5}
String[] balls = {"1", "2", "3"};
Observable<String> source 
        = Observable
        .fromArray(balls)
        .flatMap(ball -> Observable.just(ball + "<>", ball + "<>"));
source.subscribe(System.out::println);
```
### for문을 사용한 기본적인 구구단
```java
Scanner in = new Scanner(System.in);
System.out.println("구구단 시작");
int dan = Integer.parseInt(in.nextLine());
for (int i = 0; i < 9; i++) {
        System.out.println(dan + " * " + i + " = " + dan * i);
}
```
### Observable 변환
```java{4}
Scanner in = new Scanner(System.in);
System.out.println("구구단 시작");
int dan = Integer.parseInt(in.nextLine());
Observable<Integer> gugudan = Observable.range(1, 9);
gugudan.subscribe(row -> System.out.println(dan + " * " + row + " = " + dan * row));
```
- Observable.range(start, count): start 숫자부터 count 개수만큼의 숫자 값을 발행
- 예외 처리를 Observerble 안에서 할 수 없다는 문제가 있음
### 사용자 함수 정의
- 정의하는 함수는 `Funtion<T, R>`
- T는 사용자에게 입력받는 Integer, R은 9개 줄로 출력되는 `Observable<String>`
 
```java{4,5,6}
Scanner in = new Scanner(System.in);
System.out.println("구구단 시작");
int dan = Integer.parseInt(in.nextLine());
Function<Integer, Observable<String>> gugudan
        = num -> Observable.range(1, 9)
        .map(row -> num + " * " + row + " = " + dan * row);
Observable<String> source = Observable.just(dan).flatMap(gugudan);
source.subscribe(System.out::println);
```
- 중요한 점
> 1. 나에게 필요한 함수를 정의(함수를 다른곳에서 재사용 가능)
> 2. 깂 1개를 전달받아 여러개의 결과를 출력해야 하므로 Observable 발행하는 flatMap() 활용
### flatMap() 좀 더 활용
```java{6,7,8}
Scanner in = new Scanner(System.in);
System.out.println("구구단 시작");
int dan = Integer.parseInt(in.nextLine());
Observable<String> source = Observable
        .just(dan)
        .flatMap(num -> Observable
                        .range(1, 9)
                        .map(row -> num + " * " + row + " = " + dan * row));
source.subscribe(System.out::println);
```
- flatMap() 함수내부에 인라인으로 변환
```java
@CheckReturnValue
@SchedulerSupport(SchedulerSupport.NONE) // 현재 스레드에서 다룬다.(5장 자세히)
public final <R> Observable<R> flatMap(Function<? super T, 
        ? extends ObservableSource<? extends R>> mapper) { 
        // ObservableSource 데이터를 발행할 수 있는 겍체를 포괄해서 지칭
    return flatMap(mapper, false);
}

@CheckReturnValue
@SchedulerSupport(SchedulerSupport.NONE)
public final <U, R> Observable<R> flatMap(Function<? super T
        , ? extends ObservableSource<? extends U>> mapper,
        BiFunction<? super T, ? super U, ? extends R> resultSelector) {
        // 찻 반쩨 mapper의 인자로 받은 T, 그것의 결과로 나오는 U를 기반으로 새로운 Observable을 만들 수 있음
        // BiFunction은 Funtion 인터페이스와 다르게 입력 인자로 2개의 값을 받는 함수형 인터페이스
return flatMap(mapper, resultSelector, false, bufferSize(), bufferSize());
}

Scanner in = new Scanner(System.in);
System.out.println("구구단 시작");
int dan = Integer.parseInt(in.nextLine());
Observable<String> source = Observable
        .just(dan)
        .flatMap(num -> Observable.range(1, 9),
                (num, row) -> num + " * " + row + " = " + dan * row);
source.subscribe(System.out::println);
```

## 변환연산자

### concatMap() 함수
- [다이어그램 보러가기](https://rxmarbles.com/#concatMap)
- flatMap() 함수와 유사
- flatMap() 먼저 들어온 데이터를 처리하는 도중에 데이터가 들어오면 나중에 들어온 데이터의 처리 결과가 먼저 출력될 수도 있음, 이를 `interrleeaving(끼어들기)`라고 함
- concatMap() 함수는 먼저 들어온 데이터 `순서대로 처리`해서 결과를 낼 수 있도록 보장
```java{4,10,17,22,24,29}
CommonUtils.exampleStart();
String[] balls = {"1", "3", "5"};
Observable<String> source =
        Observable.interval(100L, TimeUnit.MILLISECONDS)
                .map(Long::intValue)
                .map(idx -> balls[idx])
                .take(balls.length)
                .concatMap(
//              .flatMap(
                        ball -> Observable.interval(200L, TimeUnit.MILLISECONDS)
                                .map(notUsed -> ball + "💎")
                                .take(2)
                );
source.subscribe(Log::it);
CommonUtils.sleep(2000);
// concatMap() 실행결과
RxComputationThreadPool-2 | 501 | value = 1💎
RxComputationThreadPool-2 | 703 | value = 1💎
RxComputationThreadPool-3 | 906 | value = 3💎
RxComputationThreadPool-3 | 1106 | value = 3💎
RxComputationThreadPool-4 | 1308 | value = 5💎
RxComputationThreadPool-4 | 1507 | value = 5💎
// flatMap() 실행결과
RxComputationThreadPool-2 | 574 | value = 1💎
RxComputationThreadPool-3 | 672 | value = 3💎
RxComputationThreadPool-4 | 774 | value = 5💎
RxComputationThreadPool-2 | 774 | value = 1💎
RxComputationThreadPool-3 | 872 | value = 3💎
RxComputationThreadPool-4 | 973 | value = 5💎
```
### switchMap() 함수
- [다이어그램 바로가기](https://rxmarbles.com/#switchMap)
- concatMap() 함수가 동작의 순서를 보장한다면 switchMap() 함수는 순서를 보장하기 위해 `진행중이던 작업을 중단`
- 여러개의 값이 발행되었을 때 마지막에 들어온 값의 처리는 보장
```java
CommonUtils.exampleStart();
String[] balls = {"1", "3", "5"};
Observable<String> source =
        // balㅣs를 100ms로 발행
        Observable.interval(100L, TimeUnit.MILLISECONDS)
                .map(Long::intValue)
                .map(idx -> balls[idx])
                .take(balls.length)
                .doOnNext(Log::dt)
                .switchMap(
                        // 다이아몬드를 200ms로 발행
                        ball -> Observable.interval(200L, TimeUnit.MILLISECONDS)
                                .map(notUsed -> ball + "💎")
                                .take(2)
                );
source.subscribe(Log::it);
CommonUtils.sleep(2000);
// 실행 결과
RxComputationThreadPool-4 | 758 | value = 5💎
RxComputationThreadPool-4 | 956 | value = 5💎
// doOnNext
RxComputationThreadPool-1 | 346 | debug = 1
RxComputationThreadPool-1 | 445 | debug = 3
RxComputationThreadPool-1 | 545 | debug = 5
RxComputationThreadPool-4 | 746 | value = 5💎
RxComputationThreadPool-4 | 950 | value = 5💎
```
### groupBy() 함수
![groupBy 마블 다이어그램](http://reactivex.io/documentation/operators/images/groupBy.c.png)
- 어떤 기준으로 단일 Observable을 여러 개로 이루어진 Observable 그룹으로 만듬
```java
String[] objs = {"6", "4", "2", "2-T", "6-T", "4-T"};
Observable<GroupedObservable<String, String>> source
        = Observable.fromArray(objs).groupBy(Shape::getShape);
// 그룹 별로 GroupedObservable 생성
source.subscribe(
        obj -> {
                obj
                // 내부에서 다시 한번 subscribe
                .subscribe(
                // getKey() 구분된 그룹
                        val -> System.out.println("GROUP:" + obj.getKey() + "\t Value:" + val)
                );
        }
);
// 실행결과
GROUP:BALL	 Value:6
GROUP:BALL	 Value:4
GROUP:BALL	 Value:2
GROUP:TRIANGLE	 Value:2-T
GROUP:TRIANGLE	 Value:6-T
GROUP:TRIANGLE	 Value:4-T
```
### scan() 함수
- [다이어그램](https://rxmarbles.com/#scan)
- reduce와 비슷하지만 reduce는 마지막 1개의 데이터만을 발행
- scan()함수는 실행할 때마다 중간 결과 및 최종결과를 발행
```java
String[] balls = {"1", "3", "5"};
Observable<String> source = Observable.fromArray(balls)
        .scan((ball1, ball2) -> ball2 + "(" + ball1 + ")");
source.subscribe(Log::i);
// 실행결과
main | value = 1
main | value = 3(1)
main | value = 5(3(1))
```