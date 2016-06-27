7. Задается сумма в гривнах, необходимо посчитать минимальное количество монет, которыми можно набрать эту сумму, 
    вывести каких монет и сколько нужно.
    
var n, x = 15.20;
var coins = x * 100;
console.log(coins);

console.log("coins 50: " +Math.floor(coins / 50));
console.log("Zalyshok: " +Math.floor(coins % 50));
console.log("coins 25: " +Math.floor(Math.floor(coins % 50) / 25));
n = Math.floor(Math.floor(Math.floor(coins % 50) % 25));
console.log("Zalyshok: " +n);
console.log("coins 10: " +Math.floor(n / 10));
console.log("Zalyshok: " +Math.floor(n % 10));
console.log("Coins 5: " +Math.floor(Math.floor(n % 10) / 5));
console.log("Coins 1: " +Math.floor(Math.floor(n % 10) % 5));


<!--  =======================================================
    one more
   =======================================================  -->
function coin ( value ){
  var x = value * 100;
  
  if(x <= 0) {
    return 0;
  }
  var sum50 = 0, sum25 = 0, sum10 = 0, sum5 = 0, sum2 = 0 ; 
  
  while(x >= 50){ 
    x = x - 50;
    sum50++; 
  }
  while(x >= 25){
    x = x - 25;
    sum25++;
  }
  while(x >= 10){
    x = x - 10;
    sum10++;
  }
  while(x >= 5){
    x = x - 5;
    sum5++;
  }
  while(x >= 2){
    x = x - 2;
    sum2++;
  }
  return ("count coin 50 - " +sum50 + ";" 
          +" count coin 25 - " +sum25 + ";" 
          +" count coin 10 - " +sum10 + ";"
          +" count coin 5 - " +sum5 + ";"
          +" count coin 2 -  " +sum2+ ";"
          +" count coin 1 - " +x);
}
coin(15.20);

