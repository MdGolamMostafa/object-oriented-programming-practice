class Tiger{
    // #region = "haka";
    constructor(name){
        this.name = name;
        this.#region = "region";
    }
    run(){
        console.log(`I am ${this.name} speed style is -- ${this.#region}`)
    }
}
const animals = new Tiger('nakal');
animals.run();
// animals.#region = "haka";
animals.name ='malam';
console.log(animals);
