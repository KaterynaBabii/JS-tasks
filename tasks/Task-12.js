12. Написать функцию, которая переставляет элементы в массиве в обратном порядке. 
	Функция должна менять существующий массив а не создавать новый.

function reverseArrayInPlace(array) {
  var old;
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

var arrayValue = [1, 3, 6, 4, 5];
console.log(reverseArrayInPlace(arrayValue));

