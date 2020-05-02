type MoveDirection = "left" | "right" | "foreward" | "backward";

interface Carprop{
    color :string,
    milege : number,
    brand : string,
}

interface carloc{
    period: string,
    last: number,
    lon:number
}

class car{
    color;
    milege;
    brand;
    name;

    constructor(config:Carprop){
        this.color = config.color;
        this.milege = config.milege;
        this.brand = config.milege;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    carlocation(location:Array<string>){
        location = ["banglore"]
    }
    carnumber(number:Array<number>){
        number = [4]
    }
}
