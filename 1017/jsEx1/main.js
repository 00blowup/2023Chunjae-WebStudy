'use strict'

// 문자열과 정수를 붙이면 문자열이 된다. (1717이 출력됨)
let string = "17" + 17;
console.log(string);

// 자바스크립트의 컬렉션에는 다양한 타입의 요소를 넣을 수 있다.
let array = ['abc', 10, true, undefined, null, [], {}, function(){}];

// for of 반복문의 사용 예시
for (var value of array) {
    console.log(value);
}