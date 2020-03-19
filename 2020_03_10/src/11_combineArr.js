/*--COMBINE ARRAYS

  Write a function that combines two unsorted arrays into a
  sorted array without any duplicates. Use the comparative
  operators for sorting instead of any sorting functions.

  For example: combineArr([2, 4], [1, 3]) returns [1, 2, 3, 4]
*/

var combineArr;

combineArr = function(arr1, arr2) {
    arr1 = arr1.concat(arr2);

    function swap(i, j) {
        var temp = arr1[i];
        arr1[i] = arr1[j];
        arr1[j] = temp;
        return arr1;
    }
    for (var i = 0; i < arr1.length - 1; i++) {
        for (var j = i + 1; j < arr1.length; j++) {
            if (arr1[i] > arr1[j]) {
                arr1 = swap(i, j);
            }
        }
    }
    arr2 = [arr1[0]];
    for (i = 1; i < arr1.length; i++) {
        if (arr1[i] != arr1[i - 1]) {
            arr2 = arr2.concat(arr1[i]);
        }
    }
    return arr2;
};

/*--Mocha Testing--*/
module.exports = combineArr;