20. Задан массив, который может содержать вложенные массивы (сколько угодно уровней вложенности). 
	Написать функцию , которая возвращает номер элемент массива первого уровня с максимальной вложенностью.

var arr = [
            [1,3,4,1,8,11,[1,2,3,],[1,2]],
            [12,3,[1,4,3,],[1,5,3,],[1,2,3,],[1],2,17],
            [4, [24,34],1,2,3,[1,2],[1,2],[1,2],[1,[1,2,3],2],4,5] 
          ];
           
var count = 1, 
    countmax =1;

 for(var i = 0; i < arr.length; i++){
  if(arr[i].length > 1){
    for(var j = 0; j < arr[i].length; j++){          
      if(arr[i][j].length > 1 ){
        count++;
           if(count >= countmax){           
              countmax = count;
               var index = i;
           }
      }else{
        count= 1;
      }    
    }
           
  }
}
console.log(countmax);
console.log("Index: " +index);