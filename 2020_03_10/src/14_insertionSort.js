/*--INSERTION SORT

  Write a function that sorts an array of integers 
  using the "Method Sort" methodology.

  http://en.wikipedia.org/wiki/Insertion_sort

  "Insertion sort iterates, consuming one input element each repetition, 
  and growing a sorted output list. Each iteration, insertion sort removes 
  one element from the input data, finds the location it belongs within 
  the sorted list, and inserts it there. It repeats until no input elements remain.
  Sorting is typically done in-place, by iterating up the array, 
  growing the sorted list behind it. At each array-position, it checks 
  the value there against the largest value in the sorted list 
  (which happens to be next to it, in the previous array-position checked). 
  If larger, it leaves the element in place and moves to the next. 
  If smaller, it finds the correct position within the sorted list, 
  shifts all the larger values up to make a space, and inserts into that correct position."
*/

var insertionSort;

insertionSort = function(arr) {
    function swap(a, b) {
        var temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
        return arr;
    }
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                arr = swap(i, j);
            }
        }
    }
    return arr;
};

/*--Mocha Testing--*/
module.exports = insertionSort;