console.log("*********************************print all odd number using IIFE function*********************************");
//print all odd numbers using IIFE function

var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];


(function() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            console.log(arr[i]);
        }
    }
})();

console.log("*********************************print all odd number using anonumous function*********************************");
//print all odd numbers using anonymous function

var ano = function(arro) {
    for (var i = 0; i < arro.length; i++) {
        if (arr[i] % 2 != 0) {
            console.log(arro[i]);
        }
    }
}
ano(arr);