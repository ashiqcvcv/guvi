//Return all the palindromes in an array

var arr = ["ashiq", 1, 343, 5775, 7, 77, "malayalam", "maam", 'ant'];
var ano = (arro) => {
    for (var k = 0; k < arr.length; k++) {
        str = arr[k].toString();
        if (str.length == 1) {
            console.log(str);
        }
        if (str.length % 2 == 0) {
            var L = str.length / 2;
        } else {
            var L = Math.floor(str.length / 2);
        }
        for (var i = 0; i < L; i++) {
            if (str[i] != str[str.length - i - 1]) {
                break;
            } else if (i == L - 1) {
                console.log(str);
            }
        }
    }
}
ano(arr);