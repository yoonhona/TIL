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
