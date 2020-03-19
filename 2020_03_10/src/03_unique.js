/*--UNIQUE

  Write a function that takes an array and returns 
  a new sorted array containing all of the unique elements
  of the original array.

  For example: unique([1, 2, 2, 3]) returns [1, 2, 3];
*/

var unique;

unique = function(arr) {
    arr = arr.sort(function(a, b) { return a - b });
    var out = [arr[0]];
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] != arr[i + 1]) {
            out.push(arr[i + 1]);
        }
    }
    return out;
};

/*--Mocha Testing--*/


module.exports = unique;