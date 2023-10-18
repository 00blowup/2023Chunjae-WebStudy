'use strict'

// 총액
let money = 3470;

// 각 돈 개수
let thousand = 0;
let hundred = 0;
let fifty = 0;
let ten = 0;


while(true) {
    if(money>=1000) {
        money -= 1000;
        thousand++;
    }
    else break;
}
while(true) {
    if(money>=100) {
        money -= 100;
        hundred++;
    }
    else break;
}
while(true) {
    if(money>=50) {
        money -= 50;
        fifty++;
    }
    else break;
}
while(true) {
    if(money>=10) {
        money -= 10;
        ten++;
    }
    else break;
}


document.write("사용된 돈: 1000원짜리 " + thousand + "개, 100원짜리 " + hundred + "개, 50원짜리 " + fifty + "개, 10원짜리 " + ten + "개");