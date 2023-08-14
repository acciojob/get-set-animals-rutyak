class Animal {
  constructor(species) {
    this._species = species;
  }

  get species(){
	  return this._species;
  }
	
  makeSound() {
    console.log("Animal sound");
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }

   makeSound() {
    console.log("Meow");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }

   makeSound() {
    console.log("Auu Auu Auu");
  }
}

const ani = new Animal("wild Animal");
console.log(ani.species); // wild aminal
ani.makeSound(); // Animal sound

const cat = new Cat("Cat");
console.log(cat.species); //cat
cat.makeSound(); // Meow
cat.purr();

const dog = new Dog("Dog");
console.log(dog.species); //dog
dog.makeSound(); // Auu Auu Auu
dog.bark();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
