// define a class named 'Person'
class Person {
    // class constructor to initialize the 'name' and 'age' properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    // method to display a message
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}