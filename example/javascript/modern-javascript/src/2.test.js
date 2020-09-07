import {regexUflag, regexNoUflag} from './2'

test('정규식 U 플래그', () => {
  // 유니코드를 지원하지 않는 정규식에서는 length가 2로 잡힘
  expect(regexNoUflag('𠮷')).toEqual(2)
  // flag u가 지원되는 es6+에서는 1로
  expect(regexUflag('𠮷')).toEqual(1)
})
