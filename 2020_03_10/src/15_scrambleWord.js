/*--SCRAMBLE WORD

  Write a function that takes two inputs: a word and an array of
  other words. Your program must return all of the words from the array
  that our input word can unscramble to.

  For example: scrambleWord("cat", ["tac", "toc"])) returns ["tac"]
*/

var scrambleWord;

scrambleWord = function(str, arr) {
    var out = [];

    function isequal(arr1, arr2) {
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] != arr2[i]) {
                return false;
            } else if (i == arr1.length - 1) {
                return true;
            }
        }
    }

    for (var i = 0; i < arr.length; i++) {
        if (isequal(str.split("").sort(), arr[i].split("").sort())) {
            out = out.concat(arr[i]);
        }
    }
    return out;
};

/*--Mocha Testing--*/


module.exports = scrambleWord;