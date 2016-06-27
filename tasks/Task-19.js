19. Задан массив, массив может содержать числовые элементы, а так же вложенные массивы с числами. 
	Написать функцию, которая будет сортировать входящий массив по возрастанию, 
	вложенные массивы обрабатываются одним из следующих образов:
	а) значение вложенного массива равно сумме всех его элементов?
	б) значение вложенного массива равно среднему значению всех его элементов?
	в) максимальному элементу в массиве?

var arr = [1,122,3,4,[1,8,11,12,3,2,17],24,34];

var average,
    sum = 0,
    index = 0,
    count = 0;

for(var i =0; i < arr.length; i++){
  if (arr[i].length > 1){
    index = i;

    for(var j =0; j < arr[i].length; j++){
     var max = arr[i][0];
      if(max < arr[i][j]){
        max = arr[i][j];
        
      }
      
     sum += arr[i][j];
      
     count++; 
     average = (sum/count).toFixed(1);
    }
     //arr[index] = sum;
    //arr[index] = average;
    arr[index] = max;
  }
    
}  
console.log("Sum: " +sum);
console.log("Avarega: " +average);
console.log("Max: " +max);
console.log(arr);
console.log(arr.sort(function(a, b){
  return a-b;
}));