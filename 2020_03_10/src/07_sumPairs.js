/*--SUM PAIRS

  Write a method that takes two parameters (array & target value)
  and returns an array of the pairs that sum the target value.

  For example: sumPairs([1, 2, 3, 4, 5], 7) returns [[2, 3], [4, 5]]
*/

var sumPairs;

sumPairs = function(arr, target) {
    var out = [];
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (parseInt(arr[i]) + parseInt(arr[j]) == target) {
                out.push([arr[i], arr[j]]);
            }
        }
    }
    return out;
};
/*--Mocha Testing--*/


module.exports = sumPairs;