22. Задан упорядоченный по возрастанию целочисленный массив. 
	Сформировать второй массив из случайных целых чисел, которые не встречаются в первом массиве, 
	но имеют величину больше минимального и меньше максимального из чисел первого массива. 
	#TODO: уточнить задачу, сколько чисел надо заполнить

function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomArr(arr, n){
  
 var max = min = arr[0];
 var rez = [];

for(var i = 0; i < arr.length; i++){
  if(arr[i] >= max){
    max = arr[i];
  } else if(arr[i] < min){
    min = arr[i];
  }
}
 
for(var j = 0 ; j < n; j++){
  var num = getRandomInt(min, max);
  rez.push(num);
  for(var k =0; k < arr.length; k++){ 
    if(rez[j] == arr[k]){
      console.log(rez[j])
      rez.splice(j,1)
    }
   
  }
}
  
return rez;

}
console.log(randomArr([1,8, 17 ,12,22], 10));