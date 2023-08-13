class Animal {
  constructor(species) {
    this.species = species;
  }

  makeSound() {
    console.log("Animal sound");
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

const dog = new Dog();
const cat = new Cat();

dog.bark();
cat.purr();
cat.makeSound();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
