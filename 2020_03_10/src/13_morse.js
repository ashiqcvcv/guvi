/*--MORSE

  Build a function that takes in a string (no numbers or punctuation) 
  and outputs the morse code for it.

  http://en.wikipedia.org/wiki/Morse_code

  Put two spaces between words and one space between letters.

  For example: morse("q") returns "--.-"
*/

var morse;

morse = function(str) {
    var code = {
        a: '.-',
        b: '-...',
        c: '-.-.',
        d: '-..',
        e: '.',
        f: '..-.',
        g: '--.',
        h: '....',
        i: '..',
        j: '.---',
        k: '-.-',
        l: '.-..',
        m: '--',
        n: '-.',
        o: '---',
        p: '.--.',
        q: '--.-',
        r: '.-.',
        s: '...',
        t: '-',
        u: '..-',
        v: '...-',
        w: '.--',
        x: '-..-',
        y: '-.--',
        z: '--..',
    }
    var out = code[str[0]];
    for (var i = 1; i < str.length; i++) {
        if (str[i] != ' ') {
            out += ' ';
            out += code[str[i]];
        } else {
            out += ' ';
        }
    }
    return out;
};

/*--Mocha Testing--*/
console.log(morse("cat in hat"));

module.exports = morse;