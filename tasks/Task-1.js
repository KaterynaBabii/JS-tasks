// all comments should be commented
// 1. Создать две строки "first" и "test". Соединить их в одну строку с пробелом. 
//    Сделать первые буквы каждого слова заглавными.

var str1 = "first";
var str2 = "test";
var str = str1 +" " +str2; // please use space properly after and before +
var newStr = str.split(" ");
var rez = ""; // please name vars in correct english lang, in this case result

// please create func for this job wich will be return result
for(var i = 0; i < newStr.length; i++) {
    rez += newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1) + " ";
}
console.log( rez );