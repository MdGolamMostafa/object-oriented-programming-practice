class SmartDevice {
    constructor(price,quantity,name){
        this.price = price;
        this.quantity = quantity;
        this.name = name;
    }
}

class phone extends SmartDevice{
    constructor(price,quantity,name,display){
        // this.price = price;
        // this.quantity = quantity;
        // this.name = name;
        super(price,quantity,name,display);
        this.display = display;
    }
}

class Tablet extends SmartDevice{
    constructor(price,quantity,name,isWifi){
        // this.price = price;
        // this.quantity = quantity;
        // this.name = name;
        super(price,quantity,name);
        this.isWifi = isWifi;
    }
    charging(){
        console.log('I am eating electrons...they yummy')
    }
}

const device = new Tablet(111,3,'device');
device.charging()
console.log(device);