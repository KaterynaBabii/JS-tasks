17. Написать программу расчета среднего арифметического отрицательных элементов в одномерном массиве. 
	  Заменить минимальный элемент в одномерном массиве на полученное среднее арифметическое.

var arr = [1,-2,-3,3,2,-5,7,-9,10,-11];

var count = 0, 
    sum = 0, 
    min = 0, 
    average, 
    index;

for(var i = 0; i <= arr.length; i++){
  if(arr[i] < 0){
    count++;
    sum += arr[i]; 
    average = sum/count;
    if(arr[i] < min){
      min = arr[i];
    }
  }
}
index = arr.indexOf(min);
arr[index] = average;

console.log("Min elem: " +min)
console.log("arithmetical average: " +average);
console.log("Replaced elem in array: " +arr);

//////////////////////////////////////////////////////

var arr = [56,32,-34,99,-56,32,-18,-45,12,-44];
console.log("Old arr: " +arr);

var count = 0,
    sum = 0,
    avr,
    index, 
    min = arr[0];

for(var i = 0; i < arr.length; i++){
  if(arr[i] < 0){
    count++;
    sum += arr[i];
    if(arr[i] < min){
      min = arr[i];
      index = i;
    }
  }
}
avr = (sum/count).toFixed(0);
arr[index] = avr;

console.log("Average: " +avr);
console.log("New arr: " +arr);