//find the details of India

var request = new XMLHttpRequest()
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function() {
    var arr = JSON.parse(this.response);
    console.log("*********************************find using for loop*********************************");
    //find using for loop

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].name == "India") {
            console.log(arr[i]);
        }
    }

    console.log("*********************************find using find function*********************************");
    //find using find function

    function findCountry(country) {
        if (country.name == "India") {
            return country;
        }
    }
    console.log(arr.find(findCountry));
}