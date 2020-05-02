var van = /** @class */ (function () {
    function van() {
        var pic = document.createElement('img');
        this.name = prompt("enter the name of van");
        pic.id = name;
        pic.src = "https://purepng.com/public/uploads/large/purepng.com-vantruckvehicletransportwhitevanbuscargodeliveryautocommercialcourier-981525067770rld6a.png";
        pic.onclick = this.onclickVan();
        pic.setAttribute('style', "width: 10%;");
        document.body.appendChild(pic);
    }
    van.prototype.onclickVan = function () {
        var _this = this;
        return function () {
            alert("you clicked " + _this.name + " van");
        };
    };
    return van;
}());
function createVan() {
    var van1 = new van();
}
var car = /** @class */ (function () {
    function car() {
        var pic = document.createElement('img');
        this.name = prompt("enter the name of car");
        pic.id = name;
        pic.src = 'https://www.freepnglogos.com/uploads/car-png/car-png-large-images-40.png';
        pic.onclick = this.onclickCar();
        pic.setAttribute('style', "width: 10%;");
        document.body.appendChild(pic);
    }
    car.prototype.onclickCar = function () {
        var _this = this;
        return function () {
            alert("you clicked " + _this.name + " car");
        };
    };
    return car;
}());
function createCar() {
    var car1 = new car();
}
