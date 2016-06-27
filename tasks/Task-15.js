15. Задан массив с числами, напистаь функцию, которая будет сортировать массив в указанном порядке: 
	а) по возрастанию?
	б) по убыванию?
	в) сначала все четные, потом все нечетные?

var arr = [1,-5,2,4,7,45,6]

console.log( arr.sort(function(a, b){
  return a-b;
}));
console.log( arr.sort(function(a, b){
  return b-a;
}));
console.log( arr.sort(function(a, b) {
    return (a & 1) - (b & 1) || a - b;
}));
