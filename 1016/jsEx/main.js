'use strict'

/*
var과 let의 업데이트와 재선언
*/

// var은 업데이트와 재선언 모두 가능하다!

// 재선언됨
var a = 30;
var a = 50;

// 업데이트됨
var b = 30;
b = 50;

// let은 업데이트될 수 있지만 재선언은 불가능하다!

// 재선언 시도 시 Syntex error 발생
// let c = 30;
// let c = 50;

// 업데이트됨
let d = 30;
d = 50;

console.log(a);
console.log(b);
//console.log(c);
console.log(d);


/*
var과 let의 호이스팅
*/

// var, let, const 모두 호이스팅은 된다.

console.log("e 호이스팅 " + e); // 초기화가 되므로 오류 없이 undefined로 출력됨
var e = 100;

console.log("f 호이스팅 " + f); // let과 const는 초기화가 안 되므로 오류가 발생함 (Uncaught ReferenceError: Cannot access 'f' before initialization)
let f = 200;