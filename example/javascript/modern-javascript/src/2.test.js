import { regexUflag, regexNoUflag } from "./2";

test("정규식 U 플래그", () => {
  // 유니코드를 지원하지 않는 정규식에서는 length가 2로 잡힘
  expect(regexNoUflag("𠮷")).toEqual(2);
  // flag u가 지원되는 es6+에서는 1로
  expect(regexUflag("𠮷")).toEqual(1);
});

describe("String 관련", () => {
  // 2.2.1
  test("String 부분 식별 메서드", () => {
    const msg = "Hello World!";

    // 문저열 시작 지점에서 해당 문자열 포함 검사
    expect(msg.startsWith("Hello")).toBe(true);
    // 인덱스를 지정하여 시작 지점을 옮겼기 때문에 false를 반환
    expect(msg.startsWith("Hello", 1)).toBe(false);

    // 뒤에서부터 포함 검사
    expect(msg.endsWith("!")).toBe(true);
    expect(msg.endsWith("!", 1)).toBe(false);

    // 포함
    expect(msg.includes("o W")).toBe(true);
    expect(msg.includes("o W", 5)).toBe(false);
  });

  // 2.2.2
  test("String repeat() 반복 메서드", () => {
    expect("x".repeat(4)).toEqual("xxxx");
  });
});

describe("정규 표현식 관련", () => {
  // 2.3.1
  test("정규표현석 y 플래그", () => {
    let msg = "hello1 hello2 hello3",
      pattern = /hello\d\s?/,
      result = pattern.exec(msg),
      globalPattern = /hello\d\s?/g,
      globalResult = globalPattern.exec(msg),
      stickyPattern = /hello\d\s?/y,
      stickyResult = stickyPattern.exec(msg);

    const testMatch = "hello1 ";
    expect(result[0]).toEqual(testMatch);
    expect(globalResult[0]).toEqual(testMatch);
    expect(stickyResult[0]).toEqual(testMatch);

    // 정규식 실행 후 플래그에 따라 last index 변경이 됨
    expect(pattern.lastIndex).toEqual(0);
    expect(globalPattern.lastIndex).toEqual(7);
    expect(stickyPattern.lastIndex).toEqual(7);

    pattern.lastIndex = 1;
    globalPattern.lastIndex = 1;
    stickyPattern.lastIndex = 1;

    result = pattern.exec(msg);
    globalResult = globalPattern.exec(msg);
    stickyResult = stickyPattern.exec(msg);

    expect(result[0]).toEqual(testMatch);
    expect(globalResult[0]).toEqual("hello2 ");
    expect(stickyResult).toBeNull();

    expect(pattern.lastIndex).toEqual(1);
    expect(globalPattern.lastIndex).toEqual(14);
    // 매칭이 없으면 0으로 초기화
    expect(stickyPattern.lastIndex).toEqual(0);
  });

  // 2.3.2
  test("정규표현식 복사", () => {
    const regex = /ab/i,
      // es6에 추가된 문법 es5이하에서는 문법 오류
      // 복사하면서 플래그 변경 가능
      regex2 = new RegExp(regex, "g");

    expect(regex.toString()).toEqual("/ab/i");
    expect(regex2.toString()).toEqual("/ab/g");

    const testMsg = "ab";
    expect(regex.test(testMsg)).toEqual(true);
    expect(regex2.test(testMsg)).toEqual(true);

    const testMsg2 = "AB";
    expect(regex.test(testMsg2)).toEqual(true);
    expect(regex2.test(testMsg2)).toEqual(false);
  });

  /**
   * 2.3.3
   * es5 이하에서는 정규 표현식의 flag를 알기 위해서는 문자열 변환 후 파싱해서 사용
   * es6에서는 flags 프로퍼티가 추가되어 편하게 사용가능해짐
   */
  test("정규 표현식 flags 프로퍼티", () => {
    const testRegex = /test/gi;

    expect(testRegex.toString().split("/")[2]).toEqual("gi");
    expect(testRegex.flags).toEqual("gi");
  });
});

describe("템플릿 리터럴", () => {
  // 2.4.1
  test("기본 문법", () => {
    const message = `\`Hello World!\``;
    expect(message).toEqual("`Hello World!`");
  });

  // 2.4.2
  test("멀티 라인", () => {
    const msg = `가나다라
마`;
    // 글자는 5글자이지만 중간에 개행이 되면서 length가 6이된다.
    expect(msg).toHaveLength(6);

    const msg2 = "가나다라\n마";
    // 중간에 \n을 사용해도 동일
    expect(msg2).toHaveLength(6);
  });

  // 2.4.3
  test("치환자", () => {
    const name = "nyh",
      message = `Hello ${name}`;
    expect(message).toEqual("Hello nyh");

    const count = 10,
      price = 0.25,
      message2 = `${count} item cost ${(count * price).toFixed(2)}`;
    expect(message2).toEqual("10 item cost 2.50");
  });

  // 2.4.4
  test("태그", () => {
    let items = [];
    let tag = (literals, ...args) => {
      items = args.map((item) => item);
      return args;
    };

    const count = 10,
      price = 0.25,
      message = tag`${count} . ${price}`;
    // tag funtion의 두번째 인자에 치환자가 순서대로 전달됨
    expect(items[0]).toEqual(count);
    expect(items[1]).toEqual(price);

    tag = (literals, ...args) => {
      let result = "";
      for (let i = 0; i < args.length; i++) {
        result += literals[i];
        result += args[i];
      }
      result += literals[literals.length - 1];
      return result;
    };

    // tag function에서 기본 템플릿 문자열과 동일한 결과를 반환
    expect(tag`${count} . ${(count * price).toFixed(2)}`).toEqual("10 . 2.50");
  });
});
