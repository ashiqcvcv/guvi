/*--RECTANGLE INTERSECTION

  Write a function that returns the
  intersection of the two rectangles.

  Rectangles are represented as a pair of coordinate-pairs: the
  bottom-left and top-right coordinates (given in `[x, y]` notation).

  Hint: You can calculate the left-most x coordinate of the
  intersection by taking the maximum of the left-most x coordinate of
  each rectangle. Likewise, you can calculate the top-most y
  coordinate of the intersection by taking the minimum of the top most
  y coordinate of each rectangle.

  For example: recIntersection([[0, 0], [2, 1]],
                               [[1, 0], [3, 1]]) returns [[1, 0], [2, 1]]
*/

var recIntersection;

recIntersection = function(rec1, rec2) {
    var max = (x1, x2) => x1 > x2 ? x1 : x2;
    var min = (x1, x2) => x1 < x2 ? x1 : x2;

    var bottomleft = [
        [max(rec1[0][0], rec2[0][0]), max(rec1[0][1], rec2[0][1])]
    ];
    var topright = [
        [min(rec1[1][0], rec2[1][0]), min(rec1[1][1], rec2[1][1])]
    ];
    console.log(bottomleft, topright);
    return bottomleft.concat(topright);
};

/*--Mocha Testing--*/
recIntersection([
    [0, 0],
    [2, 1]
], [
    [1, 0],
    [3, 1]
]);

module.exports = recIntersection;