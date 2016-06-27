21. Написать функции которые конвертируют  массив с числами в последовательность нулей и единиц. 
	Количество нулей или единиц равняется числу соответствующего элемента массива. 
	В массиве может быть только один 0 - в самом начале. При этом, если первый ноль - тогда интерпритация  следующего за нулем 
	числа должна быть единицами, если нуля в начале нет - нулями. 
	Примеры:?[1,2,3] <=> "011000"
			?[2, 1] <=> "001"
			?[0,2,3] <=> "11000"
			?[0,1,2,1,5] <=> "100100000"
			?[1,2,1,5] <=> "011011111"?
	Т.е. В результате у нас должна быть функция, которая преводит массив в последовательность нулей и единиц, 
	вторая наоборот последовательность в массив.


function convertStrArr (value){
  if(typeof value == "string"){
    
      return convertToArray(value);
    
  } else if(value instanceof Array){
    
      return convertFromArray(value);
    
  } else {
    
      return 0;
  }
   
}

console.log(convertStrArr ([2,4,3]));


function convertFromArray(array){
  var str = '';

  for(var i = 0; i < array.length; i++){

    if(i % 2 == 0){
      for(var j = 0; j < array[i]; j++){
        str += array[i] * 0;
      } 
    }else{
       for(var j = 0; j < array[i]; j++){
        str += array[i] * 0 + 1;
      }
    }

  }
  return str;
}

function convertToArray(str){
  
  var arr =[];
 var count = 1;

 for (var i = 0; i <= str.length; i++){
 
  if(str[i] == str[i+1]){
      count++;
    }else{
      arr.push(count)
      count = 1;
    }

  }
   if(str[0] == "1"){
      arr.unshift(0);
    }
  return arr;
}


 