// anonymous function

let subtract = function(a, b){
    return a - b;
}
console.log(subtract(12, 10))

// arrow function

let multiply = (a, b) => {return a * b}
console.log(multiply(4, 5))

// generator function
// read yourself

// read ES6

// constructor function

function Person(name, age){
    this.name = name;
    this.age = age;
}
let john = new Person('John', 24)
console.log(john)

let person = {}
person.name = 'John';
person.age = 23;

console.log(person)




