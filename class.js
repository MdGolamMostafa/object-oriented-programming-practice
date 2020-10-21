class Mouse{
    constructor(color,price,quantity) {
        this.color = color;
        this.price = price;
        this.quantity = quantity
    }
}
const ashiqMouse = new Mouse('black',150,2);
console.log(ashiqMouse);

function Jug(color,price,capacity)  {
    this.color = color;
    this.price = price;
    this.capacity = capacity
}

const ashiqJug = new Jug('white',132,3);