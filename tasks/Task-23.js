23. Дан массив целых чисел. Проверить, что максимальное количество совпадений больше значения минимального элемента и
	меньше максимального. 
	Пример:?[1,3,1,5,1,3,4] - минимальный элемент 1, а мксимальный 5. 
			Совпадения: тройка - 2 раза, единица - 3 раза, т.е. 
			Максимальное количество совпадений - 3. 1 < 3 < 5 - массив удовлетворяет нашему условию.

var arr = [9, 9, 9, 3, 5, 2, 6, 7, 9, 9, 9, 1, 8, 0, 9, 9, 1, 1 ];

arr = arr.sort();
var count = countmax = 1,
    min = arr[0],
    max = arr[arr.length-1];


for(var i = 0; i < arr.length; i++){
  if(arr[i] == arr[i+1]){
    count++;
    if(count > countmax){
      countmax = count;
    }
  }else{
    count = 1;
  }
  
}
console.log(arr);
console.log("max matches: " +countmax);
console.log("min: " +min);
console.log("max: " +max)
console.log((countmax > min && countmax < max) ? true : false)