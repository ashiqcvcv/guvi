/*--NEAREST LARGER

  Write a function that takes an array and an index.
  The function should return the index of the nearest
  larger integer. In case of a tie, choose the left larger integer
  and return null if no larger numbers are found.

  For example: nearestLarger([1, 4, 3, 2], 2) returns 1
*/

var nearestLarger;

nearestLarger = function(arr, idx) {
    var p1 = idx - 1;
    var p2 = idx + 1;
    while (p1 >= 0 || p2 < arr.length) {
        if (arr[p1] == arr[p2] && arr[p1] > arr[idx]) {
            return p1;
        } else if (arr[p1] > arr[idx] && arr[p1] > arr[p2]) {
            return p1;
        } else if (arr[p2] > arr[idx] && arr[p2] > arr[p1]) {
            return p2;
        } else if (p1 <= 0 && p2 >= arr.length - 1) {
            return null;
        } else {
            p1--;
            p2++;
        }
    }
};

/*--Mocha Testing--*/


module.exports = nearestLarger;