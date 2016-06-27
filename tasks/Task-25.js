25. Задан массив, необходмо найти все элементы которые  больше суммы своих соседей. 
	Для граничных элементов (первого и последнего) недостающим соседом считать среднее элемента и его известного соседа.

var arr = [15 ,1 ,6, 4,12, 5, 21];
 
if(arr[0] > (arr[0]/2)+arr[1]){
    console.log(arr[0])
  } 
 if(arr[arr.length-1] > (arr[arr.length-1]/2) +arr[arr.length-1]){
    console.log(arr[arr.length-1])
  }   

for(var i = 1; i< arr.length-1; i++){
  if(arr[i] > arr[i-1]+arr[i+1]){
    console.log(arr[i]);
  } 
}