/*--NON REPEATS

  Write a function takes a range of numbers
  and outputs the years that have unique digits.

  For example: nonRepeats(197, 199)) returns [197, 198]
*/

var nonRepeats;

nonRepeats = function(start, end) {
    function same(num) {
        num = num.toString();
        for (var i = 0; i < num.length - 1; i++) {
            for (var j = i + 1; j < num.length; j++) {
                if (num[i] == num[j]) {
                    return 0;
                }
            }
        }
        return 1;
    }
    var out = [];
    for (var k = start; k < end; k++) {
        if (same(k)) {
            out.push(k);
        }
    }
    return out;
};

/*--Mocha Testing--*/

module.exports = nonRepeats;