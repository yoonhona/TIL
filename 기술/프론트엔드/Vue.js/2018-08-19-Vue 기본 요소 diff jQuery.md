# Vue.js 이벤트, 리스트 처리를 jQuery 비교 해보기

![vue logo](https://kr.vuejs.org/images/logo.png)

### The Progressive JavaScript Framework

Vue.js 이벤트, 리스트 처리를 jQuery 비교 해보기

---
**이벤트**
* jQuery  

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

### **$.(selector).on('event', callback());**

---
**이벤트**
* Vue.js  

```javascript
<template>
    <div>
        <button v-on:click="counter += 1">Add 1</button>
        <p>위 버튼을 클릭한 횟수는 {{ counter }} 번 입니다.</p>
    </div>
</template>
<script>
    export defalut{
        name: 'example',
        data: {
            counter: 0
        }
    }
</script>
```
## **v-on:event="function"**

---
**리스트**
```html
<table>
    <tr>
        <th>아이디</th>
        <th>이름</th>
        <th>주소</th>
        <th>전화번호</th>
    </tr>
    <tr> <!-- 반복되는 요소 -->
        <td>1111</td>
        <td>홍길동</td>
        <td>서울시</td>
        <td>111-2222-333</td>
    </tr>
</table>
```
---
**리스트**
* jQuery
```javascript
<table id="example">
    ......
</table>
<script>
    $.ajax('/list', {
        method: 'GET',
        .....
    }).done(function(res) {
        var list = res.list;
        list.forEach(function(item) { // html 요소가 javascript 코드에 포함
            var tr = '<tr>' +
                    '<td>' + item.id + '</td>' +
                    '<td>' + item.name + '</td>' +
                    '<td>' + item.address + '</td>' +
                    '<td>' + item.tel + '</td>' +
                    '</tr>';

            $('#example tr:last').after(tr);
        });
    });
</script>
```
---
**리스트**  
Vue.js
```javascript
<template>
    <table>
        ...
        <tr v-for="item in list "> 
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.tel }}</td>
        </tr>
    </table>
</template>
<script>
export default {
    name: 'example',
    data(): {
        return {
            list: []
        }
    },
    created() {
        this.getList();
    },
    methods: {
        getList() {
            const self = this;
            this.$http.get('/list')
            .then(res => {
                self.list = res.list;
            })
        }
    }
}
</script>
```
---
**리스트 + 이벤트**  

요구 사항의 변화 및 증가
- 아이디를 클릭 시 상세 팝업 .....

jQuery
```javascript
<table id="example">
    ......
</table>
<script>
    $.ajax('/list', {
        .....
    }).done(function(res) {
        ....
            var tr = '<tr>' +
            '<td class="td-id" data-id="' + item.id + '">' + item.id + '</td>' +
                    ....
    });
    $('.td-id').on('click', function(){
        var id = $(this).data('id');
        ..... // 팝업
    });
</script>
요구사항이 증가 할 수록 한 페이지의 소스양이 증가하고 복잡해진다.
```  
---
**리스트 + 이벤트**  
Vue.js
```javascript
<template>
    <table>
        ...
        <tr v-for="item in list "> 
            <td v-on:click="popup">{{ item.id }}</td> // 이벤트를 추가
        ...
</template>
<script>
export default {
    name: 'example',
    data(): {
        return {
            list: []
        }
    },
    created() {
        this.getList();
    },
    methods: {
        getList() {
            ...
        },
        popup() { // 이러면 jQuery와 다를게 없어보인다.
            ...
        }
    }
}
</script>
```
---
**컴포넌트**

>기본 HTML 엘리먼트를 확장하여 재사용 가능한 코드를 캡슐화하는 데 도움이 됩니다. 상위 수준에서 컴포넌트는 Vue의 컴파일러에 의해 동작이 추가된 사용자 지정 엘리먼트입니다. (Vue.js 공식 가이드-한국어버전)

```javascript
App.vue
<template>
    <table>
        ...
        <tr-example v-for="item in list"
            v-bind:information="item"
        >
</template>
<script>
import TrExample from 'TrExample.vue';
export default {
    name: 'example',
    components: [TrExample],
    ...
    methods: {
        getList() {
            ...
        }
    }
}
</script>

TrExample.vue
<template>
    <tr v-for="item in information "> 
        <td v-on:click="popup">{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.tel }}</td>
    </tr>
</template>
<script>
export default {
    name: 'TrExample',
    props: ['information'],
    methods: {
        popup() {
            ...
        }
    }
}
</script>
```

