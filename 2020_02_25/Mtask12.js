//return all the prime numbers in an array

arro = [2, 5, 7, 6, 23, 12, 4, 6, 10];

var ano = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 2) {
            console.log(2);
        }
        for (var k = 2; k < arr[i]; k++) {
            if (k == arr[i] - 1) {
                console.log(arr[i]);
            } else if (arr[i] % k == 0) {
                break;
            }
        }
    }
}
ano(arro);