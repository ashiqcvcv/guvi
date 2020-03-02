//Print all the country name in capital letter using map
var request = new XMLHttpRequest()
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function() {
    var arr = JSON.parse(this.response);

    //using for loop
    console.log("*********************************map using for loop*********************************");
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i].name.toUpperCase());
    }

    //using map function
    console.log("*********************************map using map function*********************************");

    function capit(country) {
        return country.name.toUpperCase();
    }

    var capToUpper = arr.map(capit);
    console.log(capToUpper);
}