console.log("*********************************sum of odd number using reduce function*********************************");
//sum of odd numbers using reduce function

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function summOdd(sum, num) {
    if (num % 2 != 0) {
        return sum += num;
    } else {
        return sum;
    }
}

console.log(arr.reduce(summOdd));

console.log("*********************************sum of odd number using for loop*********************************");
//sum of odd numbers using for loop
sum = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
        sum += arr[i];
    }
}
console.log(sum);