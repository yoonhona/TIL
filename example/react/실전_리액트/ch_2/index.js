//// ch2 ES6+

/**
 * 1.1
 */
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

/**
 * 1.2
 */
function makeObject1 (key, value) {
  const obj = {}
  obj[key]  = value
  return obj
}

function makeObject2 (key, value) {
  return {
    [key]: value,
  }
}

/**
 * 2.1
 */

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
