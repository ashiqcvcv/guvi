/*--IN WORDS

  Write a function that takes a single positive integer 
  and returns its equivalent in words.

  For example: inWords(27) returns "twenty seven"

  The function should work for all numbers ranging
  from zero to the trillions.
*/

var inWords;

inWords = function(num) {
    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var eleven = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var tens = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var place = ['hundred', 'thousand', 'million', 'billion', 'trillion'];
    num = num.toString().split("").reverse();
    var out = [];
    if (num == '0') {
        return 'zero';
    }

    function hundred(arr) {
        var temp = [];
        if (arr.length >= 1 && arr[1] != '1' && arr[0] != '0') {
            temp = temp.concat(ones[arr[0]]);
        }
        if (arr.length >= 2 && arr[1] != '0') {
            if (arr[1] == '1') {
                temp = temp.concat(eleven[arr[0]]);
            } else {
                temp = temp.concat(tens[arr[1] - 1]);
            }
        }
        if (arr.length == 3 && arr[2] != '0') {
            temp = temp.concat(ones[arr[2]] + ' ' + place[0]);
        }
        return temp;
    }
    var j = 1;
    for (var i = 0; i < num.length; i += 3) {
        var temper = num.slice(i, i + 3);
        var next = num.slice(i + 3, i + 6);
        out = out.concat(hundred(temper));
        if (i + 3 < num.length && parseInt(next.join("")) != '0') {
            out = out.concat(place[j]);
        }
        j++;
    }
    return out.reverse().join(" ");
};

/*--Mocha Testing--*/
console.log(inWords(10000001));
console.log(inWords(1000000000001));

module.exports = inWords;