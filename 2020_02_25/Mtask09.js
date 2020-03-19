console.log("*********************************print odd numbers in an array using array function*********************************");
//print odd numbers in an array using array function

var input = [1, 2, 3, 4, 6, 7, 9, 5, 23, 4];

var oddFinder = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            console.log(arr[i]);
        }
    }
}
oddFinder(input);