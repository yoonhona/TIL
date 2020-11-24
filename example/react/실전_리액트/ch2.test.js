describe("2.1 const, let", () => {
  describe("var가 가진 문제", () => {
    test("함수 스코프", () => {
      function example1() {
        var i = 1;
        expect(i).toEqual(1);
      }
      function example2() {
        i = 2;
      }
      example1();
      example2();
      expect(i).toEqual(2);
    });

    test("호이스팅", () => {
      expect(myvar1).toBeUndefined();
      var myvar1 = 1;

      myvar2 = 2;
      expect(myvar2).toEqual(2);
      var myvar2 = 1;
    });

    test("재정의", () => {
      var myvar1 = 1;
      expect(myvar1).toEqual(1);
      var myvar1 = 2;
      expect(myvar1).toEqual(2);
    });
  });

  describe("var 문제를 해결하는 const, let", () => {
    test("블록 스크프", () => {
      let foo = "bar1";
      expect(foo).toEqual("bar1");
      if (true) {
        let foo = "bar2";
        expect(foo).toEqual("bar2");
      }
      expect(foo).toEqual("bar1");
    });

    test("호이스팅, temporal dead zone", () => {
      const foo1 = "var";
      if (true) {
        expect(foo1).toEqual("var");
      }

      if (true) {
        expect(() => {
          console.log(foo1);
        }).toThrow(ReferenceError);
        const foo1 = "var2";
      }
    });

    test("const 재할당 불가", () => {
      const foo = "a";
      expect(() => {
        foo = "b";
      }).toThrow();

      let bar = "foo";
      bar = "bar";
      expect(bar).toEqual("bar");
    });

    test("const  object", () => {
      const foo = { prop1: 1 };
      foo.prop1 = 2;
      foo.prop2 = 1;
      expect(foo.prop1).toEqual(2);

      if (true) {
        const bar = { prop: 1 };
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions
        Object.preventExtensions(bar);
        bar.prop2 = 1;
        bar.prop = 2;
        expect(bar.prop2).toBeUndefined();
        expect(bar.prop).toEqual(2);
        delete bar.prop;
        expect(bar.prop).toBeUndefined();
      }

      if (true) {
        const bar = { prop: 1 };
        Object.seal(bar);
        bar.prop2 = 1;
        expect(bar.prop2).toBeUndefined();
        delete bar.prop;
        expect(bar.prop).toEqual(1);
        bar.prop = 2;
        expect(bar.prop).toEqual(2);
      }

      if (true) {
        const bar = { prop: 1 };
        Object.freeze(bar);
        bar.prop2 = 1;
        expect(bar.prop2).toBeUndefined();
        bar.prop = 2;
        expect(bar.prop).toEqual(1);
        delete bar.prop;
        expect(bar.prop).toEqual(1);
      }
    });
  });
});

describe("2.2 객체와 배열의 사용성 개선", () => {
  describe("객체, 배열 간편하게 생성 및 수정", () => {
    test("단축 속서성명", () => {
      const name = "mike";
      const obj = {
        name,
        age: "33",
      };

      expect(obj.name).toEqual(name);
    });
    test("계산된 속성명 computed property names", () => {
      function makeObj(key, value) {
        return { [key]: value };
      }
      const key = "key";
      const value = "value";
      expect(makeObj());
    });
  });

  describe("객체와 배열의 속성값을 간편하게 가져오기", () => {
    test("전개 연산자", () => {
      const obj = {
        age: 23,
        name: "mike",
      };
      const arr = [1, 2, 3];

      const obj2 = { ...obj };
      const arr2 = [...arr];

      expect(obj2).toEqual(obj);
      expect(arr2).toEqual(arr);
    });

    test("배열 비구조화", () => {
      const arr = [1, 2];
      const [a, b = 20, c = 10] = arr;
      expect(a).toEqual(1);
      expect(b).toEqual(2);
      expect(c).toEqual(10);
    });

    test("객체 비구조화", () => {
      const obj = { age: 21, name: "mike", address: "서울시" };
      const { name, age, address: addr, gender = "M" } = obj;
      expect(name).toEqual(obj.name);
      expect(age).toEqual(obj.age);
      expect(addr).toEqual(obj.address);
      expect(gender).toEqual("M");
    });
  });
});

describe("2.3 강화된 함수의 기능", () => {
  describe("2.3.1 매개변수", () => {
    test("매개변수 기본값", () => {
      function argsDefault(a = 1) {
        return a;
      }

      expect(argsDefault()).toEqual(1);
    });

    test("나머지 매개변수", () => {
      function argsRest(a, ...rest) {
        return rest;
      }

      expect(argsRest(1, 2, 3)).toEqual([2, 3]);
    });

    test("명명된 매개변수", () => {
      function namedParameter({ name, age = 19 }) {
        return { name, age };
      }

      const result = namedParameter({ name: "mike" });
      expect(result.name).toEqual("mike");
      expect(result.age).toEqual(19);
    });
  });

  test("화살표 함수", () => {
    if (true) {
      const obj = {
        value: 1,
        increase: function () {
          this.value++;
        },
      };
      obj.increase();
      expect(obj.value).toEqual(2);
      const increase = obj.increase;
      increase();
      expect(obj.value).toEqual(2);
    }

    if (true) {
      function Something() {
        this.value = 1;
        this.increase = () => this.value++;
      }

      const obj = new Something();
      obj.increase();
      expect(obj.value).toEqual(2);
      const increase = obj.increase;
      increase();
      expect(obj.value).toEqual(3);
    }
  });
});
