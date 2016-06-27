11. Заданы три числа, которые обозначают число, месяц, год. 
	  Найти порядковый номер даты, начиная отсчет с начала года.

function dayData(day, month, year){
  var m = [31,28,31,30,31,30,31,31,30,31,30,31],
      sumDays = 0;
  
  for(var i = 0; i < month-1; i++){
    sumDays +=  m[i]; 
  }

  sumDays = sumDays + day;

  if (month > 2) {
    if (year % 4 == 0) {
      if ((year % 100 == 0) && (year % 400 !== 0)) {
        sumDays = sumDays;
      } else {
        sumDays++;
      }
    }
  }

  return sumDays;
}

console.log(dayData(1, 4, 2000));