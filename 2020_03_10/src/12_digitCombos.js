/*--DIGIT COMBINATIONS
  Write a function that takes a number with distinct digits 
  and returns a sorted array of all the numbers
  than can be formed with those digits.
  For example: digitCombos(123) returns [123, 132, 213, 231, 312, 321]
*/

var digitCombos;

digitCombos = function(num) {
    function swap(a, b, arr) {
        var temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
        return num;
    }

    function permutation(fixed, arr) {
        if (fixed == arr.length - 1) {
            out = out.concat(parseInt(arr.join("")));
            return out;
        } else {
            for (var i = fixed; i < arr.length; i++) {
                arr = swap(fixed, i, arr);
                permutation(fixed + 1, arr);
                arr = swap(fixed, i, arr);
            }
        }
    }
    num = num.toString().split("");
    var out = [];
    permutation(0, num);
    return out;
};

/*--Mocha Testing--*/


module.exports = digitCombos;