'use strict'

var i = 2;
while(i <= 9){
  var j = 1;
  while(j <= 9){
    document.write(i + "X" + j + "=" + i*j + "<br />");
    j++;
  }
  i++;
  document.write("<br />");
}