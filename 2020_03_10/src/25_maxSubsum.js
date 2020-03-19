/*--MAX SUBSUM

  Write a function that takes an array of integers
  and finds the contiguous subarray within the array with the largest sum.

  http://en.wikipedia.org/wiki/Maximum_subarray_problem 

  For example: maxSubsum([−2, 1, −3, 4, −1, 2, 1, −5, 4]) returns [4, −1, 2, 1]
*/

var maxSubsum;

maxSubsum = function(arr) {
    var out = [];
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        var temp = [];
        var tempsum = arr[i];
        var row = [];
        var rowsum = 0;
        for (var j = i; j < arr.length; j++) {
            row = row.concat(arr[j]);
            rowsum += arr[j];
            if (tempsum < rowsum) {
                temp = row;
                tempsum = rowsum;
            }
        }
        if (sum < tempsum) {
            sum = tempsum;
            out = temp;
        }
    }
    return out;
};

/*--Mocha Testing--*/

module.exports = maxSubsum;