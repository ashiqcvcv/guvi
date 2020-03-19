/*--INDEX WORDS

  Write a function that takes an array containing a list of words
  and returns an object mapping out the first letter of each word
  to an array of the words starting with that letter.

  For example: indexWords(["apple", "car", "cat"]) returns {a: ["apple"], c: ["car", "cat"]}
*/

var indexWords;

indexWords = function(arr) {
    var obj = new Object;
    arr = arr.sort();
    for (var i = 0; i < arr.length; i++) {
        if (obj[arr[i][0]] == undefined) {
            obj[arr[i][0]] = [arr[i]];
        } else {
            obj[arr[i][0]] = obj[arr[i][0]].concat(arr[i]);
        }
    }
    return obj;
};

/*--Mocha Testing--*/

module.exports = indexWords;