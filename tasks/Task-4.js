4. Дана строка, в которой указаны числа через запятую (так же могут присутствовать пробелы). 
   Необходимо найти минимальное и максимальное число.

var str = "1,2,7, ,863,-3,4,0,-123,9,5";
var num = str.split(",").map(Number);

var max = min = num[0]; // where you creating var min?
// please create func
for(var i = 0; i <= num.length; i++){
  if (num[i] > max) {
    max = num[i];   
  }
  if (num[i] < min) {
    min = num[i];
  }  
}
console.log("Max-elem " +max +" " +"Min-el " +min);

<!--=======================================================
	one more
=======================================================  -->

var str= "1,2,7, ,863,-3,9,65,7,111111";
var num=str.split(',');
console.log( Math.min.apply(null, num));
console.log( Math.max.apply(null, num));