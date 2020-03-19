/*--TRANSPOSE

  To represent a matrix, or two-dimensional grid of numbers, we can write an array containing arrays which represent rows:

    var rows = [[0, 1, 2],
                [3, 4, 5],
                [6, 7, 8]]

  Write a method that will convert between the row-oriented and column-oriented representations.

  For example: transpose(rows) ===  [[0, 3, 6],
                                     [1, 4, 7],
                                     [2, 5, 8]]
*/

var transpose;

transpose = function(arr) {
    var i = 0;
    var out = [];
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i].length) {
            max = arr[i].length;
        }
    }
    for (var i = 0; i < max; i++) {
        var temp = [];
        for (var j = 0; j < arr.length; j++) {
            temp = temp.concat([arr[j][i]]);
        }
        out[i] = temp;
    }

    return out;
};

/*--Mocha Testing--*/

module.exports = transpose;