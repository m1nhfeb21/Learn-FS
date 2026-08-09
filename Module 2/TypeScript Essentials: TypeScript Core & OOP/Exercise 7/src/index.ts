class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound() {}
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  makeSound() {
    console.log("Sủa ẳng ẳng");
  }
}

const dog = new Dog("Buddy");
dog.makeSound();
