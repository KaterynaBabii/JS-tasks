24. Задан массив целых чисел. 
	Найти среднее всех чисел, далее найти индекс последнего элемента, который максимально близкий к среднему, 
	все числа до этого элемента упорядочить по возрастанию, а все после по убыванию. 
	Пример:
			[2 ,1 ,3, 4, 6, 5, 7] => среднее - 4, максимально близкий к среднему элемент с индексом 3,
			сортируем массив согласно правилам и получаем [1,2,3,4,7,6,5]

var arr = [2 ,1 ,3, 4, 6, 5, 7];

var sum = 0,
    count = 0,
    average, k, index, minavr ;

for(var i = 0; i < arr.length; i++){
  sum += arr[i];
  count++;
}
average = sum/count;
minavr = Math.abs(arr[0]-average);

for(var j = 0; j < arr.length; j++){  
  if(Math.abs(arr[j]-average) < minavr){    
    minavr = Math.abs(arr[j]-average);
    index = j;
    
  } 

}

console.log(index + " - индекс последнего элемента, который максимально близкий к среднему: " );
console.log(minavr);

function compareNumbers(a, b) {
  return a - b;
}

console.log((arr.slice(0,index+1).sort(compareNumbers)).concat(arr.splice(index+1).sort(compareNumbers).reverse()) );
