import { regexUflag, regexNoUflag } from './2'

test('정규식 U 플래그', () => {
  // 유니코드를 지원하지 않는 정규식에서는 length가 2로 잡힘
  expect(regexNoUflag('𠮷')).toEqual(2)
  // flag u가 지원되는 es6+에서는 1로
  expect(regexUflag('𠮷')).toEqual(1)
})

// 2.2.1
test('String 부분 식별 메서드', () => {
  const msg = 'Hello World!'

  // 문저열 시작 지점에서 해당 문자열 포함 검사
  expect(msg.startsWith('Hello')).toBe(true)
  // 인덱스를 지정하여 시작 지점을 옮겼기 때문에 false를 반환
  expect(msg.startsWith('Hello', 1)).toBe(false)

  // 뒤에서부터 포함 검사
  expect(msg.endsWith('!')).toBe(true)
  expect(msg.endsWith('!', 1)).toBe(false)

  // 포함
  expect(msg.includes('o W')).toBe(true)
  expect(msg.includes('o W', 5)).toBe(false)
})

// 2.2.2
test('String repeat() 반복 메서드', () => {
  expect('x'.repeat(4)).toEqual('xxxx')
})

// 2.3.1
test('정규표현석 y 플래그', () => {
  let msg = 'hello1 hello2 hello3',
        pattern = /hello\d\s?/,
        result = pattern.exec(msg),
        globalPattern = /hello\d\s?/g,
        globalResult = globalPattern.exec(msg),
        stickyPattern = /hello\d\s?/y ,
        stickyResult = stickyPattern.exec(msg);

  const testMatch = 'hello1 ';
  expect(result[0]).toEqual(testMatch)
  expect(globalResult[0]).toEqual(testMatch)
  expect(stickyResult[0]).toEqual(testMatch)

  // 정규식 실행 후 플래그에 따라 last index 변경이 됨
  expect(pattern.lastIndex).toEqual(0)
  expect(globalPattern.lastIndex).toEqual(7)
  expect(stickyPattern.lastIndex).toEqual(7)

  pattern.lastIndex = 1;
  globalPattern.lastIndex = 1;
  stickyPattern.lastIndex = 1;

  result = pattern.exec(msg)
  globalResult = globalPattern.exec(msg)
  stickyResult = stickyPattern.exec(msg)

  expect(result[0]).toEqual(testMatch)
  expect(globalResult[0]).toEqual('hello2 ')
  expect(stickyResult).toBeNull()

  expect(pattern.lastIndex).toEqual(1)
  expect(globalPattern.lastIndex).toEqual(14)
  // 매칭이 없으면 0으로 초기화
  expect(stickyPattern.lastIndex).toEqual(0)


})
