//convert all the strings to title caps in a string array

var arr = ["ashiq", "ashwin", "joice", "arun", "abhijith"];

var changeTitle = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
    }
}

changeTitle(arr);