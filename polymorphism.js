const pi = 2; 
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area(){
        return this.width * this.height;
    }
}

class Triangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area(){
        return this.width * this.height/2;
    }
}
class Square {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area(){
        return this.width * this.width;
    }
}

const area = [new Square(2,3),new Rectangle(2,3),new Triangle(2,3)];

for (let i = 0; i < area.length; i++) {
    const areaValue = area[i];
    console.log(areaValue.area());
    
}