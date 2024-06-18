// Object.assign() method copies values of properties from 
// one or more objects to a target object

const source = {a:1, b:2};
const target = {b:3, c:4};

const merged = Object.assign(source, target);
console.log(merged);
console.log(target);


// Object.keys()
// returns array of given object's own enumerable property names

const person = {
    name: 'John',
    age: 30,
    gender: 'male'
}
let keys = Object.keys(person);
console.log(keys)

console.log(Object.values(person));


// Object.entries() 
// returns array of a given object's own enumerable string-keyed property [key, value] pairs.

let entries = Object.entries(person);
console.log(entries);


// Object.freeze()
// freezes an object so that it can no longer be changed.

const obj = {prop: 22};
Object.freeze(obj)
obj.prop = 33; // no effect
console.log(obj)


// Object.seal()
// seals an object, preventing new properties from being added
// to it and marking all existing properties as non-configurable. Valuesof present
// properties can still be changed as long as they are writable.

const obj2 = {prop: 42};
Object.seal(obj2);
obj2.prop = 33; //allowed
obj2.newProp = 'new' // not allowed
console.log(obj2);


// Object.getOwnPropertyNames()
// returns array of all properties (including non-enumerable
// properties except for those which use Symbol) found
// directly upon a given object.

const obj3 = {a:1, b:2};
const properties = Object.getOwnPropertyNames(obj3);
console.log(properties)


// Object.hasOwnProperty() 
// The hasOwnProperty() method returns a boolean indicating whether the object has the
// specified property as its own property (as opposed to inheriting it).


const hasOwnProperty = obj3.hasOwnProperty('a');
console.log(hasOwnProperty)