10. Даны два массива с различным количеством элементов. Перераспределить их элементы так, 
    чтобы в первом массиве были наименьшие из двух массивов, а во втором - наибольшие.

function compareNumbers(a, b) {
  return a - b;
}

var array1 = [11, 7, 9, 23, 13],
    array2 = [4, 54, 17, 42];

var rez = array1.concat(array2).sort(compareNumbers); // same problem with var name;
var rez1 = rez.splice(0, array1.length); 
console.log(rez1);
console.log(rez);

