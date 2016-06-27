9. Дано N целых чисел. Требуется выбрать из них три таких числа, произведение которых максимально.

function findLargest3(arr){ 
    arr.sort(function(a,b){
        if (a < b){ return 1; } 
        else if (a == b) { return 0; } 
        else { return -1; }
    });
    return arr[0] * arr[1] * arr[2];

}
findLargest3([-9,-6,5,-10,5,6]);