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

// Arrays

const numbers = [2, 3, 1, 7, 5]
console.log(numbers[3])

numbers.push(6)
console.log(numbers)

numbers.pop()
console.log(numbers)

console.log(numbers.sort())


// study string and array methods, manipulation 


// Object
// in js, object is a data structure that allows you to 
// store data in the form of key value pairs. 

const personn = {
    name: 'John',
    age: 30,
    hobbies: ['Reading', 'Cooking', 'Running']
};
console.log(personn.name)
console.log(personn.age) 
console.log(personn.hobbies) 



