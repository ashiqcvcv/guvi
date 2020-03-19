console.log("*********************************sum of all numbers using IIFE function*********************************");
//sum of all numbers using IIFE function

var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];

(function() {
    sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
})();

console.log("*********************************sum of all numbers using anonumous function*********************************");
//sum of all numbers using anonymous function

var ano = function(arro) {
    sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}
ano(arr);