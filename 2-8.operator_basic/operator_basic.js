// 아래 코드가 실행된 후, 변수 a, b, c, d엔 각각 어떤 값들이 저장될까요?
// let a = 1, b = 1;

// let c = ++a; // 2
// let d = b++; // 1

// console.log('a =', a);
// console.log('b =', b);
// console.log('c =', c);
// console.log('d =', d);

//  -------------------------------------------------------------------------------------------

// 아래 코드가 실행되고 난 후, a와 x엔 각각 어떤 값이 저장될까요?
// let a = 2;

// let x = 1 + (a *= 2);

// // a = 4, x = 5

// console.log('a =', a);
// console.log('x =' ,x);


//  -------------------------------------------------------------------------------------------

// 예측한 결과를 적어본 후, 해답과 비교해 보시기 바랍니다.

// console.log("" + 1 + 0); // 10
// console.log("" - 1 + 0); // -1
// console.log(true + false); // 1
// console.log(6 / "3"); // 2
// console.log("2" * "3"); // 6
// console.log(4 + 5 + "px"); // 9px
// console.log("$" + 4 + 5); // $45
// console.log("4" - 2); // 2
// console.log("4px" - 2); // Nan (Not a Number)
// console.log(7 / 0); // Infinity (무한대)
// console.log("  -9  " + 5); //   -9  5
// console.log("  -9  " - 5); // -14
// console.log(null + 1); // 1
// console.log(undefined + 1); // NaN
// console.log(" \t \n" - 2); // -2

//  -------------------------------------------------------------------------------------------
/**
 *아래 코드는 사용자에게 숫자 2개를 입력받은 다음 그 합을 보여줍니다.

  그런데 의도한 대로 예시가 동작하지 않습니다. 프롬프트 창에 세팅한 기본값을 수정하지 않은 경우 덧셈의 결과는 12가 됩니다.

  왜 그럴까요? 예시가 제대로 동작하도록 코드를 수정해 보세요. 결과는 3이 되어야 합니다. 
*/
let a = "1";
let b = "2";

console.log(+a + +b); // 12

console.log(typeof(+a + +b));