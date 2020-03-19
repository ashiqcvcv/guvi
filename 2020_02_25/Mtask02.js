console.log("*********************************convert all strings to title cap using IIFE function*********************************");
//convert all strings to title cap using IIFE function

var arr = ["ashiq", "ashwin", "joice", "arun", "abhijith"];

(function() {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
    }
})();

console.log("*********************************convert all strings to title cap using anonumous function*********************************");
//convert all strings to title cap using anonymous function

var ano = function(arro) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
    }
}
ano(arr);