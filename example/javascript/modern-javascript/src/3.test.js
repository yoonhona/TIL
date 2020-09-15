describe("기본 값", () => {
  function makeRequest(url, timeout = 200, callback = function () {}) {
    return {
      url,
      timeout,
      callback,
      arguments,
    };
  }
  // 3.1.2
  test("매개변수 기본 값", () => {
    expect(makeRequest("test").url).toEqual("test");
    expect(makeRequest("test").timeout).toEqual(200);
    expect(makeRequest("test", undefined, "callback").callback).toEqual(
      "callback"
    );
  });

  // 3.1.3
  test("매개변수 기본값이 arguments 객체에 미치는", () => {
    // 기본 값이 지정되어 있다고 해서 arguments로 지정되지 않음
    expect(makeRequest("test").arguments).toHaveLength(1);
  });

  // 3.1.4
  test("매개변수 기본 값 표현식", () => {
    function getValue(value = 0) {
      return value + 5;
    }
    function add(first, second = getValue(first)) {
      return first + second;
    }

    expect(add(1)).toEqual(7);
    expect(add(1, 1)).toEqual(2);
  });

  // 3.2.2
  test("rest 매개 변수", () => {
    function restArgs(...args) {
      return args;
    }

    const first = 1,
      second = "A";
    expect(restArgs(first, second)).toMatchObject([first, second]);
  });
});
