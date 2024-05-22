// 1. Create two variables, one for your name and another for your age.
// Print a sentence combining those variables.

const name_ = 'Manoj';
const age = '20';
console.log(`My name is ${name_} and I am ${age} years old!`);


// 2. Assign the value 10 to a variable. Then multiply that variable by itself and store
// the result in another variable. Print the final value.

const x = 10;
const y = x * x;
console.log(`${x} multiplied by itself is ${y}.`)


// 3. Write code to check if the character stored in a variable is uppercase or lowercase.
// Print 'uppercase' or 'lowercase' accordingly. (Hint: User character codes)

// using character codes
const character = 'b'
if (character >= 'A' && character <= 'Z'){
    console.log('uppercase')
}
else if (character >= 'a' && character <= 'z'){
    console.log('lowercase')
} 
else {
    console.log('Not an alphabet')
}


// using function
if(character == character.toLowerCase()){
    console.log('lowercase')
}
else{
    console.log('uppercase')
}


// 4. Declare two variables with numeric values. Add them together and print the sum.
// Then subtract the smaller number from the larger number and store the differences
// in a new variable. Print the difference.

const p = 27;
const q = 13;

const diff = p - q;
console.log(`The difference between ${p} and ${q} is ${diff}.`);


// 5. Imagine you have a variable storing a product price. Write code to apply a 10% discount
// and print the discounted price.

const price = 900;
const discount_percent = 0.1; // 10%

const discounted_price = price - price * discount_percent;

console.log(`Your discounted price after ${discount_percent * 100}% discount on ${price} is ${discounted_price}.`);


