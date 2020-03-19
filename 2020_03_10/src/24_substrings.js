/*--SUBSTRINGS

  Write a function that will take a string 
  and return an array containing each of its substrings. 

  For example: substrings("of") returns ["o", "of", "f"]
*/

var substrings;

substrings = function(str) {
    var out = [];
    for (var i = 0; i < str.length; i++) {
        for (var j = i; j < str.length; j++) {
            if (i == j) {
                out = out.concat(str[i]);
            } else {
                out = out.concat(str.slice(i, j + 1));
            }
        }
    }
    return out;
};
/*--Mocha Testing--*/


module.exports = substrings;