26. Заданы два массива - один содержит название товаров, второй содержит их стоимость. 
	Написать функцию, которая принимает два массива - список товаров в одном массиве 
	и соответствующее их количество в другом массиве, на выходе функция должна выдать стоимость покупки.

function priceCake(foodstuff, quantity){
  var price = [10, 11, 12, 13];
  var rez = [];
  
  for(var i = 0; i < price.length; i++) {
    rez.push (foodstuff[i], (quantity[i]*price[i]));
  }
  return rez;
}
priceCake(["cake1","cake2","cake3","cake4"], [1,2,3,4]);