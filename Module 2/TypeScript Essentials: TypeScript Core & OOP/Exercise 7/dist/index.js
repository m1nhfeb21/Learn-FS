"use strict";
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    makeSound() { }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log("Sủa ẳng ẳng");
    }
}
const dog = new Dog("Buddy");
dog.makeSound();
//# sourceMappingURL=index.js.map
