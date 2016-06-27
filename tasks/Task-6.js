6. Задано два числа N и K. Выведите количество чисел из диапазона от 1 до N включительно таких, 
   что их сумма цифр делится на K.

function sumDigit (n){
  var sum = 0;
   while (n != 0){    
     sum += n % 10;
      n = parseInt(n / 10);
    }
  return sum;
}

function arrSum(n, k){
  var result = [];
  for(var i = 0; i <= n; i++){
    if((sumDigit (i) % k) == 0)
      result.push(i);
 }
  return result;
}
 arrSum(120, 7);