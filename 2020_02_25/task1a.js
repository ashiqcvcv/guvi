//filter all the capitals of the country, where the length of capital is < 5

var request = new XMLHttpRequest()
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function() {
    var arr = JSON.parse(this.response);
    //using for loop
    console.log("*********************************filter using for loop*********************************");

    for (var i = 0; i < arr.length; i++) {
        if ((arr[i].capital).length < 5 && arr[i].capital.length != 0) {
            console.log(arr[i].capital);
        }
    }

    console.log("*********************************filter using filter function*********************************");
    //using filter function

    function lessthan5(cap) {
        if (cap.capital.length < 5) {
            return cap.capital;
        }
    }

    filtered = arr.filter(lessthan5);
    for (var i = 0; i < filtered.length; i++) {
        console.log(filtered[i].capital);
    }
}