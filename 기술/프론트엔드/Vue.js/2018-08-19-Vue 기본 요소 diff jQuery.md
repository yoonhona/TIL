# Vue.js 기본 요소 jQuery 비교

![vue logo](https://kr.vuejs.org/images/logo.png)

### The Progressive JavaScript Framework

아주 기본적인 Vue.js 기능들을 살펴보며 jQuery와 비교해보자

---

## 이벤트

* jQuery  
$.(selector).on('event', callback());
```javascript
<div id="example-1">
    <button id="btn-example">Add 1</button>
    <p>위 버튼을 클릭한 횟수는 <span id="span-counter"></span> 번 입니다.</p>
</div>  
<script>
var count = 0;
$('#btn-example').on('click', function(){
    count = count + 1;
    $('#span-counter').text(count);
});
</script>

```

* Vue.js  
v-on:event="function"
```javascript
<template>
    <div id="example-1">
        <button v-on:click="counter += 1">Add 1</button>
        <p>위 버튼을 클릭한 횟수는 {{ counter }} 번 입니다.</p>
    </div>
</emplate>
<script>
    export defalut{
        el: '#example-1',
        data: {
            counter: 0
        }
    }
</script>

```


