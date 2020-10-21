class College {
    constructor(name,location,quantity){
        this.name = name;
        this.location = location;
        this.quantity = quantity;
    }
    getCategory(){
        if(this.quantity && this.quantity >= 6){
            return this.quantity;
        }
        return 'please define a quantity';
    }
    
    campus(){
        if (this.quantity) {
            return (this.getCategory())
        }
        return 'please check carefully'
    }
}
const library = new College('TC','Dhaka',5);
console.log(library);
console.log(library.getCategory());