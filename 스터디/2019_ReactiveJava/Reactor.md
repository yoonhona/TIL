# Reactor

> 굉장히 많이 상상 이상으로 구글 번역기의 도움을 받았음을 미리 알려드립니다.

## 4.3.2. Cancelling a subscribe() with its Disposable
- 람다 베이스의 subscribe() 함수는 Disposable 반환 type을 갖고 있음
- 위와 같이 반환 타입으로 Disposable 가지고 있을 경우 dispose() 호출 해주면 된다.
---
- Flux, Mono의 경우는 source(the original Publisher)가 요소 발행(데이터 발행?)을 중단해야 한다고 메시지?(siginal)를 주어야 하지만 즉각적이지 않음
- 또 일부 source는 너무 빨리 발행하여 취소 지시를 받기 전에 완료할 수 있음
---
- Disposables은 유틸리티 함수를 가지고 있음, 그 중 Disposables.swap()은 Disposables wrapper를 만들고 원자적으로 취소할 수 있게 합니다.
- 예를 들어 사용자가 단추를 클릭할 때 마다 요청을 취소하고 새 요청을 대체하려는 UI 시나리오
- 래퍼 자체를 폐기하면 현재의 구체적인 값과 이후의 시도된 모든 대체 값이 삭제되어 닫힘
---
- 또 다른 유틸리티로 Disposables.composite(...)
- 여러개의 request를 처리 후 나중에 폐기 할 수 있음
- composite의 dispose()가 호출 되면 다음 Disposable이 추가 되면 즉시 폐기

## 4.3.3. Alternative to lambdas: BaseSubscriber
- 추가적으로 Subscriber를 사용할 수 있도록 해주는 BaseSubscriber라는 확장 가능한 클래스가 존재
```java
    ampleSubscriber<Integer> ss = new SampleSubscriber<Integer>();
    Flux<Integer> ints = Flux.range(1, 4);
    ints.subscribe(i -> System.out.println(i),
        error -> System.err.println("Error " + error),
        () -> {System.out.println("Done");},
        s -> s.request(10));
    ints.subscribe(ss);
```
```java
package io.projectreactor.samples;
import org.reactivestreams.Subscription;
import reactor.core.publisher.BaseSubscriber;

public class SampleSubscriber<T> extends BaseSubscriber<T> {
    // 많은 hook을 제공 https://projectreactor.io/docs/core/release/api
    // 사용자의 요청을 구할때 
	public void hookOnSubscribe(Subscription subscription) {
		System.out.println("Subscribed");
		request(1);
	}
	public void hookOnNext(T value) {
		System.out.println(value);
        // 추가 요청을 1개 요청
		request(1);
	}
}
// 출력
Subscribed
1
2
3
4
```