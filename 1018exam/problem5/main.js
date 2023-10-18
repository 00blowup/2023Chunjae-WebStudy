'use strict'

function quickSort (array) {
  if (array.length < 2) {
    return array;
  }
  const pivot = [array[0]];
  const left = [];
  const right = [];
 
  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else if (array[i] > pivot) {
      right.push(array[i]);
    } else {
      pivot.push(array[i]);
    }
  }
  console.log(`left: ${left}, pivot: ${pivot}, right: ${right}`);
  return quickSort(left).concat(pivot, quickSort(right));
}

// 배열 생성
let arr = [];

// 배열 내용
arr[0] = 7;
arr[1] = 2;
arr[2] = 30;
arr[3] = 22;
arr[4] = 38;
arr[5] = 17;
arr[6] = 25;
arr[7] = 10;
arr[8] = 9;
arr[9] = 4;

// 퀵 소트 수행
const sorted = quickSort(arr);

// 최대최소 제외 합계 구하기
let sum = 0;
for(let i =1; i<9; i++) sum += arr[i];

document.write("최대값: " + arr[9] + "<br />");
document.write("최소값: " + arr[0] + "<br />");
document.write("중앙값: " + (arr[4]+arr[5])/2 + "<br />");
document.write("최대최소 제외 합계: " + sum + "<br />");

