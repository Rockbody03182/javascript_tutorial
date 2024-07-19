console.log( Boolean(1) ); // 숫자 1(true)
console.log( Boolean(0) ); // 숫자 0(false)

console.log( Boolean("hello") ); // 문자열(true)
console.log( Boolean("") ); // 빈 문자열(false)

/**
 * PHP 등의 일부 언어에선 문자열 "0"을 false로 취급합니다. 그러나 자바스크립트에선 비어 있지 않은 문자열은 언제나 true입니다.
 */

console.log( Boolean("0") ); // true
console.log( Boolean(" ") ); // 공백이 있는 문자열도 비어있지 않은 문자열이기 때문에 true로 변환됩니다.