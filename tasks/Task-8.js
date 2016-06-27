8. Дана последовательность чисел. Посчитать в ней количество четных чисел, стоящих на четных местах.

function evenNum(array){
  var k = 0;
  for(var i = 0; i < array.length; i++){
    if( ((i % 2) == 0) && ((array[i] % 2) == 0) ){
      k += 1
    }
  }
  return k; 
}
evenNum([1,1,4,5,6,8]);