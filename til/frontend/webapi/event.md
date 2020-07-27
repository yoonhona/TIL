# 기본 동작 방지

## [Event.preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault);
이벤트의 기본 동작을 방지한다.  
키 입력 중 일부 키 입력을 막거나, 클릭 이벤트가 동작하지 않게 하거나 할 때 사용할
수 있다.

## [Event.cancelable](https://developer.mozilla.org/en-US/docs/Web/API/Event/cancelable)
이벤트가 취소 가능한지 여부를 알려준다.
readonly 속성이며, 값이 false일 경우 취소 불가능한 이벤트이다.

# 이벤트 위임

국어 사전에서 위임은 `어떤 일을 책임 지워 맡김. 또는 그 책임`이라고 써있는데
프로그래밍에서도 비슷하게 사용된다.

이벤트 위임은 이벤트가 일어난 element가 아닌 부모 혹은 그 이상의 element가
이벤트를 확인하여 처리하는 것을 뜻한다. 한마디로 자기에게 일어난 이벤트를 본인이
처리하는게 아니라 부모 element 등에 처리해달라고 책임을 넘기는 것이다.

왜 이렇게 하는지 알기전에 버블링과 캡쳐링에 관해 개념을 이해해보자

## [버블링](https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-flow-bubbling) 과 [캡쳐링](https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-flow-capture)

간단히 정리하면 버블링은 자신의 이벤트를 부모 element에 전파하는 것이고,  
캡쳐링은 부모가 자식의 이벤트를 가로 채는 것이다.


