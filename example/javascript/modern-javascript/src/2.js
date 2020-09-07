
// 2.1.2 p17
function codePointAt () {
  const text = '가a';

  console.log(text.charCodeAt(0))
  console.log(text.charCodeAt(1))

  console.log(text.codePointAt(0))
  console.log(text.codePointAt(1))
}
codePointAt()

// 2.1.4
function normalize() {
  const nfc = '가나다라닭 ABCD abcd'.normalize('NFC')
  console.log(nfc, nfc.length)
  const nfd = '가나다라닭 ABCD abcd'.normalize('NFD')
  console.log(nfd, nfd.length)
  const nfkc = '가나다라닭 ABCD abcd'.normalize('NFKC')
  console.log(nfkc, nfkc.length)
  const nfkd = '가나다라닭 ABCD abcd'.normalize('NFKD')
  console.log(nfkd, nfkd.length)
}
normalize()

// 2.1.5
export function regexNoUflag (text = '') {
  return text.match(/[\s\S]/g).length
}
export function regexUflag (text = '') {
  return text.match(/[\s\S]/gu).length
}

