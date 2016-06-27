1. Создать две строки "first" и "test". Соединить их в одну строку с пробелом. 
   Сделать первые буквы каждого слова заглавными.

var str1 = "first";
var str2 = "test";
var str = str1 +" " +str2;
var newStr = str.split(" ");
var rez = "";
for(var i = 0; i < newStr.length; i++) {
  rez += newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1) + " ";
}
console.log( rez );