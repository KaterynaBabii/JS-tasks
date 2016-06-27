5. Задается число, необходимо определить, является ли оно степенью двойки.

function powerOfTwo( value ){
  if (value <= 0) {
    return false;
  }
  while ( (value % 2) == 0 ) {
    if ( (value /= 2) == 1 ) {
    return true;
    }
  }
  return false;
}
powerOfTwo(12)
