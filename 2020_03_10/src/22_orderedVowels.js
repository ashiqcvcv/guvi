/*--ORDERED VOWELS

  Write a functions that takes a string of lowercase words and 
  returns a string with just the words containing
  all their vowels in alphabetical order.

  For example: orderedVowels("apple") returns "apple"
*/

var orderedVowels;

orderedVowels = function(str) {
    function vowels(arr) {
        var out = ['a'];
        var vow = ['a', 'e', 'i', 'o', 'u'];
        var j = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u') {
                out = out.concat(arr[i]);
                if (vow.indexOf(out[j]) > vow.indexOf(out[j + 1])) {
                    return null;
                }
                j++;
            }
        }
        return arr;
    }

    str = str.split(" ");
    var out = [];
    for (var j = 0; j < str.length; j++) {
        if (str[j].length == 1) {
            out = out.concat(str[j]);
        } else {
            var temp = vowels(str[j]);
            if (temp != null) {
                out = out.concat(temp);
            }
        }
    }
    return out.join(" ");
};

/*--Mocha Testing--*/


module.exports = orderedVowels;