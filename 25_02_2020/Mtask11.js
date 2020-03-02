//sum of all numbers in an array
var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];

var ano = (arr) => {
    sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}
ano(arr);