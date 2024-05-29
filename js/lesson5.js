// anonymous function

let subtract = function(a, b){
    return a - b;
}
console.log(subtract(12, 10))

// arrow function

let multiply = (a, b) => {return a * b}
console.log(multiply(4, 5))

console.log('\n')
// generator function

function* func(){
    yield 10;
    yield 20;
    yield 30;
}

let gen = func();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)


// natural number generator

function* nextNatural(){
    let natural_num = 1;

    while (true){
        yield natural_num++;
    }
}

gen = nextNatural()

for (i = 1; i <= 10; i++){
    console.log(gen.next().value)
}

console.log('\n')


let array = ['a', 'b', 'c']
function* generator(arr){
    let i = 0;
    while (i < arr.length){
        yield arr[i++]
    }
}

const it = generator(array)

c = it.next().value

while (c){
    console.log(c)
    c = it.next().value
}

arr = [1, 2, 3, 4, 5, 6, 7, 8]

function* genV2(){
    yield 0;
    yield* arr;
    yield 9;
}

for (value of genV2()){
    console.log(value)
}

console.log('\nConstructor Functions')
// constructor function

function Person(name, age){
    this.name = name;
    this.age = age;
}
let john = new Person('John', 24)
console.log(john)


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


// ES6
console.log('\nES6')
// Object literals

const x = 1;
const y = 2;
const obj = {x, y, greet(){return 'Hello';}};

console.log(obj.x)
console.log(obj.y)
console.log(obj.greet())

// default parameters

function greet(name = 'Harry'){
    return `Hello ${name}`
}

console.log(greet())
console.log(greet('Aditya'))


// Rest and Spread Operators

function sum(...args){
    return args.reduce((a, b) => a + b, 0)
}

arr = [1, 2, 3]
const newArr = [...arr, 4, 5]
console.log(newArr)







