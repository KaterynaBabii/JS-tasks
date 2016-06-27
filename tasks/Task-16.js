16. Задан массив. Найти самую длинную последовательность чисел, упорядоченную по возрастанию. 
    Если таких последовательностей несколько (самых длинных с одинаковой длиной), то вывести их все.

var arr = [ 62,6,11,2,78,37,99,8,80,3,59,71,85,59,46,66,1,43,89,67,48,72,88,57,82,62,51,14,6,88,47,79,96,98,97,58,50,60,58,84,98,69,2,46,12];

var count = 1, 
    countmax = 1;

for(var i = 0; i < arr.length; i++){
  if (arr[i] < arr[i+1] || arr[i] == arr[arr.length - 1]){
    count++;
    if(countmax < count){
      countmax = count; 
    }    
  }else {
    count = 1;
  }
  
}

console.log(countmax);

count = 1;
for(var j = 0; j < arr.length; j++){
  if(arr[j] < arr[j+1] || arr[j] == arr[arr.length - 1]){
    count++;
    if(count == countmax){       
      console.log(arr.slice(j+2-countmax, j+2)); 
    }
    
  }else{
    count = 1;
  }
  
}  