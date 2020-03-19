/*--MEDIAN

  Write a function that finds the median of a given array of integers.
  If the array has an odd number of integers, return the middle item 
  from the sorted array. If the array has an even number of integers, 
  return the average of the middle two items from the sorted array.

  For example: median([1, 3, 5]) returns 3
*/

var median;

median = function(arr) {
    arr = arr.sort(function(a, b) { return a - b });
    if (arr.length % 2 == 0) {
        return parseInt((arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2);
    } else {
        return arr[parseInt(arr.length / 2)];
    }
};

/*--Mocha Testing--*/

module.exports = median;