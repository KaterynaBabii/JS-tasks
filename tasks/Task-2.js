// the same problem with comments
2. У нас есть строка "When;I was,in Germany first  time-I was,six ". 
   Заменить все символы ",;-" на пробелы. Посчитать количество символов в строке, а так же количество слов 
   (словом считаем все, что разделено пробелами).

// all vars better use first on the top level
var str = "When;I was,in Germany first  time-I was,six "
var str1 = str.replace(/;|,|-/g," ");
console.log( str1.length );
var str2 = str1.split(" "); // move to top;
console.log( str2 );
console.log( str2.length );
