// let user = {
//   name: "John",
//   age: 30,
//   "likes birds": true  // 복수의 단어는 따옴표로 묶어야 합니다.
// };

// console.log(user);
// console.log(user.name);

let codes = {
  "49": "독일",
  "41": "스위스",
  "44": "영국",
  // ..,
  "1": "미국"
};

for (let code in codes) {
  console.log(code); // 1, 41, 44, 49
}