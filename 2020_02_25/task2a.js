// find sum using reduce function

console.log("*********************************sum using reduce function*********************************");
//sum using reduce function

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function redu(sum, num) {
    return sum += num;
}

console.log(arr.reduce(redu));

console.log("*********************************sum using for loop*********************************");
//sum using for loop
sum = 0
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);