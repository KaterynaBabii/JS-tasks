28. Дан массив, например, состоящий только из 0 и 1. Определить самое большое количество подряд идущих единиц 
	и вывести на экран индексы начала и конца этого диапазона.

var arr = [0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1];

var count = 0;
var count1 = count1max = 0;


for(var i = 0; i < arr.length; i++){
  if(arr[i] == 1){
    count1++;
    
    if(count1max < count1){
      count1max = count1;
    }
  }else{
    count1 = 0;
  }
}


for(var i = 0; i < arr.length; i++){
  if(arr[i] == 1){
    count1++;
    
    if(count1max == count1){
      console.log("индексы начала диапазона: " +(i- count1max+1));
      console.log("индексы конца диапазона: " +i);
    }
  }else{
    count1 = 0;
  }
}

console.log("самое большое количество подряд идущих единиц: " +count1max);