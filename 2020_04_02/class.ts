class van{
    name;
    
    constructor(){
        var pic = document.createElement('img');
        this.name = prompt("enter the name of van");
        pic.id=name;
        pic.src="https://purepng.com/public/uploads/large/purepng.com-vantruckvehicletransportwhitevanbuscargodeliveryautocommercialcourier-981525067770rld6a.png";
        pic.onclick=this.onclickVan();
        pic.setAttribute('style',"width: 10%;");
        document.body.appendChild(pic);
    }
    onclickVan(){
        return ()=>{
            alert(`you clicked ${this.name} van`);
        }
    }
}

function createVsan(){
    var van1 = new van();
}

class car{
    name;
    
    constructor(){
        var pic = document.createElement('img');
        this.name = prompt("enter the name of car");
        pic.id=name;
        pic.src='https://www.freepnglogos.com/uploads/car-png/car-png-large-images-40.png';
        pic.onclick=this.onclickCar();
        pic.setAttribute('style',"width: 10%;");
        document.body.appendChild(pic);
    }
    onclickCar(){
        return ()=>{
            alert(`you clicked ${this.name} car`);
        }
    }
}

function createCar(){
    var car1 = new car();
}