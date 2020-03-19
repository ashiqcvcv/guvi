/*--CAESAR CIPHER

  Implement your own Caesar cipher.

  http://en.wikipedia.org/wiki/Caesar_cipher

  In cryptography, a Caesar cipher, also known as Caesar's cipher, 
  the shift cipher, Caesar's code or Caesar shift, is one of the simplest 
  and most widely known encryption techniques. It is a type of substitution 
  cipher in which each letter in the plaintext is replaced by a letter 
  some fixed number of positions down the alphabet. For example, with a 
  left shift of 3, D would be replaced by A, E would become B, and so on.

  For example: caesar("hello", 3) returns "khoor"

  HINT: You can either map letters to numbers or use the ASCII codes.
*/

var caesar;

caesar = function(str, offset) {
    var out = '';
    for (var i = 0; i < str.length; i++) {
        var m = str.charCodeAt(i);
        if ((m >= 65 && m + offset < 91) || (m >= 97 && m + offset < 123)) {
            out += String.fromCharCode(m + offset);
        } else if (m + offset > 123) {
            out += String.fromCharCode(96 + (offset - (122 - m)));
        } else if (m + offset > 91) {
            out += String.fromCharCode(64 + (offset - (91 - m)));
        } else {
            out += str[i];
        }
    }
    return out;
};

/*--Mocha Testing--*/

module.exports = caesar;