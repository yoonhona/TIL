# Vue.js 이벤트, 리스트 처리를 jQuery 비교 해보기

![vue logo](https://kr.vuejs.org/images/logo.png)

### The Progressive JavaScript Framework

Vue.js 이벤트, 리스트 처리를 jQuery 비교 해보기

---
#### 이벤트
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
#### 이벤트
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
#### 리스트
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
#### 리스트
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
        list.forEach(function(item) {
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
#### 리스트
* Vue.js
```javascript
<template>
    <table>
        <tr>
        ...
        </tr>
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
        const self = this;
        getList() {
            this.$http.get('/list')
            .then(res => res.list)
            .then(list => {
                self.list = list;
            })
        }
    }
}

</script>


```