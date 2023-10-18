'use strict'

let n = 5;

for (let i = 0; i <= n/2 ; i++) {
    for(var j = 0; j<Math.abs(i); j++) document.write('&nbsp');
    for(var j = 0; j< n - (2*Math.abs(i)); j++) document.write('*');
    document.write("<br />");
}