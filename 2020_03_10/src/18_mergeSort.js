/*--MERGE SORT

  Write a function that sorts an array of integers 
  using the "Merge Sort" methodology.

  http://en.wikipedia.org/wiki/Merge_sort

  "Merge sort takes advantage of the ease of merging already sorted lists 
  into a new sorted list. It starts by comparing every two elements 
  (i.e., 1 with 2, then 3 with 4...) and swapping them if the first 
  should come after the second. It then merges each of the resulting 
  lists of two into lists of four, then merges those lists of four, 
  and so on; until at last two lists are merged into the final sorted list. 
  Of the algorithms described here, this is the first that scales well to 
  very large lists, because its worst-case running time is O(n log n). 
  It is also easily applied to lists, not only arrays, as it only requires 
  sequential access, not random access. However, it has additional 
  O(n) space complexity, and involves a large number of copies in simple implementations."
*/

var mergeSort;

mergeSort = function(arr) {
    function mergesort(arr1, arr2) {
        var p1 = 0;
        var p2 = 0;
        out = [];
        while (p1 < arr1.length && p2 < arr2.length) {
            if (arr1[p1] < arr2[p2]) {
                out = out.concat(arr1[p1]);
                p1++;
            } else {
                out = out.concat(arr2[p2]);
                p2++;
            }
        }
        if (arr1[p1] > arr2[p2]) {
            console.log(out);
            out = out.concat(arr1.slice(p1)).concat(arr2.slice(p2));
            console.log(out);
        } else {
            out = out.concat(arr2.slice(p2)).concat(arr1.slice(p1));
        }
        return out;
    }

    function split(arr) {
        if (arr.length == 1) {
            return arr;
        }
        var start = 0;
        var mid = parseInt(arr.length / 2);
        var arr1 = arr.slice(start, mid);
        var arr2 = arr.slice(mid);
        return mergesort(split(arr1), split(arr2));
    }
    if (arr.length == 0) {
        return [];
    } else {
        return split(arr);
    }
};
/*--Mocha Testing--*/

module.exports = mergeSort;