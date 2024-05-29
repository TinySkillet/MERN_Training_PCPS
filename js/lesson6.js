// constructor function

function Person(name, age){
    this.name = name;
    this.age = age;
}

let john = new Person('John', 25);
console.log(john)

// callback function

/* function passed as an argument to another
function and invoked within that function
commonly used for asynchronous operations or event handling
*/

let data = 'string';
console.log(data.codePointAt(1))
/*
'hiteshChoudhary'
'js mastery'
*/

// scopes

let globalVar = 'I am global';

function localScope(){
    let localVar = 'I am local';
    console.log(globalVar);
    console.log(localVar);
}

localScope();
// console.log(localVar) throws error

// closure functions

/* A closure is a feature in JS where an inner function has access
to the outer (enclosing) function's variable. A closure is created 
when a function references variables from the outer function.
*/

function outerFunction() {
    let outerVar = 'I am outside';
    
    function innerFunction(){
        console.log(outerVar);
    }

    return innerFunction;
}

// here myClosure references to innerFunction since outerFunction return innerFunction
const myClosure = outerFunction();
myClosure();


// call back function

function greet(name, callback){
    console.log('Hello, ' + name);
    callback();
}

function sayGoodBye(){
    console.log('Goodbye!');
}

greet('Alice', sayGoodBye);


function add(a, b, callback){
    let sum = a + b
    console.log('Sum = ' + sum)
    callback(a,b, mul); 
}

function sub(a, b, callback){
    let diff = a - b;
    console.log('Diff = ', diff)
    callback(a, b); 
}

function mul(a, b){
    let prd = a * b;
    console.log('Prd = ' + prd);
}

a = 5
b = 3
add(a, b, sub)


// promise

/* Promise provide a way to handle asynchronous operations 
by representing the eventual completion (or failure) of an 
asynchronous operation and its resulting value. A promise
can be in one of three states: pending, fulfilled, or rejected.
*/

let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success){
        resolve('Promise resolved')
    } else {
        reject('Promise rejected')
    }
});

promise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});