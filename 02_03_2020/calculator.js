var isfirst = 1;
var num1 = '';
var oper = '';
var num2 = '';
var display = '';

var isoper = 1;
var isfirst = 1;

function replay(val) {
    if (val == '=' || (num1 != '' && (val == '-' || val == '+' || val == '*' || val == '/') && num2 != '')) {
        if (oper == '+') {
            num1 = parseInt(num1) + parseInt(num2);
        } else if (oper == '-') {
            num1 = num1 - num2;
        } else if (oper == '*') {
            num1 = num1 * num2;
        } else if (oper == '/') {
            num1 = num1 / num2;
        }
        if (val == '=') {
            oper = '';
            isoper = 1;
            display = num1;
        } else {
            oper = val;
            display = num1 + val;
        }
        num2 = '';
    } else if (isfirst && val != '+' && val != '*' && val != '/' && val != '-') {
        display += val;
        num1 += val;
    } else if ((val == '-' || val == '+' || val == '*' || val == '/') && isoper) {
        oper = val;
        display += val;
        isoper = 0;
        isfirst = 0;
    } else if (val == '-' || val == '+' || val == '*' || val == '/') {
        oper = val;
        display = num1 + val;
    } else {
        display += val;
        num2 += val;
    }
    console.log(num1, oper, num2);
    document.getElementById('dis').value = display;
}

function reset() {
    display = '';
    isfirst = 1;
    num1 = '';
    oper = '';
    num2 = '';
    display = '';
    isoper = 1;
    isfirst = 1;
    document.getElementById('dis').value = display;
}