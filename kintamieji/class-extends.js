console.clear();
class Pet {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.sound = 'Miau Au Cypt Cham';
    }

    setColor(newColor) {
        this.color = newColor;
    }
    sayHi() {
        return `${this.name}: ${this.sound} as esu ${this.color} spalvos!`;
    }
}

class Dog extends Pet{
 constructor(name, color) {
    super(name, color);
    this.sound = 'Au Au'
 }
}

class Cat extends Pet{ 
    constructor(name, color) {
        super(name, color);
        this.sound = 'Miau Miau'
}}

class Hamster extends Pet {
    constructor(name, color) {
        super(name, color);
        this.sound = 'Cham Cham'
}
}
const brisius = new Dog('Brisius', 'juodos')
console.log(brisius.sayHi());

const tom = new Hamster('Tom', 'pilkos');
console.log(tom.sayHi());

const garfild = new Cat('Garfildas', 'oranzines');
console.log(garfild.sayHi());