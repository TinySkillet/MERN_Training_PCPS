// 1
const pass = 'alsdfja;lsdfkj;a';
const length = pass.length

if (length > 12){
    console.log('Strong password!')
}
else if (length > 8){
    console.log('Medium password')
}
else {
    console.log('Weak password')
}

// 2
const vowels = ['a', 'e', 'i', 'o', 'u']
const character = 'e'

if (vowels.includes(character)){
    console.log('It is a vowel!')
}
else {
    console.log('It is a consonant')
}

// 3
const random_number = 7;
const guess = 4;

if (guess === random_number){
    console.log('Correct!')
}
else if (guess < random_number){
    console.log('Guess higher!')
}
else {
    console.log('Guess lower!')
}

// 4
const tax_rate = 0.08 ;
const product_price = 799;

const final_price = product_price + tax_rate * product_price;

console.log(`The final price of ${product_price} after ${tax_rate * 100}% tax is ${final_price}`);

// 5
const num1 = 5;
const num2 = 7;
const operator = '*'

if (operator == '*'){
    console.log(`${num1} * ${num2} = ${num1 * num2}`)
}
else if(operator == '+'){
    console.log(`${num1} + ${num2} = ${num1 + num2}`)
}
else if(operator == '-'){
    console.log(`${num1} - ${num2} = ${num1 - num2}`)
}
else if(operator == '/'){
    console.log(`${num1} / ${num2} = ${num1 / num2}`)
}
else {
    console.log('Invalid operator')
}


// 6
const user_age = 30;
switch (true){
    case user_age >= 65:
        console.log('I recommend you Historical and Biographical genres.') // Seniors
        break;
    
    case user_age >= 18:
        console.log('I recommend you Drama and Romance genres.')
        break;
    
    case user_age >= 13:
        console.log('I recommend you Action and Drama genres.')
        break;
    
    case user_age >= 8:
        console.log('I recommend you Adventure and Science Fiction genres.')
        break;
    
    case user_age >= 3:
        console.log('I recommend you Animation and Family genres.')
    
    case user_age > 0:
        console.log("You'are not old enough to be watching movies just yet.")
    
    default:
        console.log('Invalid age!')
};


// 7
// using Date object 
const d = new Date('2024-05-22')
const day = d.getDay()

if (day == 0){
    console.log('The date falls on weekend (Sunday) !')
}
else if (day == 6){
    console.log('The date falls on weekend (Saturday) !')
}
else {
    console.log('The date does not fall on weekend!')
};

/*
Zeller's Congruence Algorithm for calculating day of

the week for any given date
h = (q + [13(m + 1) / 5] +  K + K/4 + J/4 - 2J) mod 7

where,
h = day of the week (0 = Saturday, 1 = Sunday....)
q = day of the month
m = month (3 = March, 4 = April, .... 12 = December, 13 = January, 14 = February)
K = year of the century (year % 100)
J = zero-based century) (year // 100)

subtract 1 from year if the month falls in january or february
*/

const e = '2024-05-22'
let q = Number(e.slice(8)) // day of the month
let m = Number(e.slice(5, 7))
let year = Number(e.slice(0, 4))

if (m < 3){
    m += 12;
    year -= 1;
}
let k = year % 100;
let j = Math.floor( year / 100);

const h = (q + Math.floor(13 * (m + 1) / 5) + k + Math.floor(k / 4) + Math.floor(j / 4) - 2 * j) % 7


if (h == 0){
    console.log('The date falls on weekend! (Saturday)')
}
else if (h == 1){
    console.log('The date falls on weekend! (Sunday)')
}
else {
    console.log('The date does not fall on weekend!')
}


// 8
const num = -1;

if (num > 0){
    console.log('Number is positive')
}
else if (num < 0){
    console.log('Number is negative')
}
else {
    console.log('Number is negative')
};


// 9
const no = 20;

if(no % 3 == 0 && no % 5 == 0){
    console.log('Number is divisible by both 3 and 5.')
}
else if (no % 3 == 0){
    console.log('Number is divisible by 3 but not 5.')
}
else if (no % 5 == 0){
    console.log('Number is divisible by 5 but not 3.')
}
else {
    console.log('Number is neither divisible by 3 nor 5.')
};


// 10
const n1 = 3;
const n2 = 5;
const n3 = n1 + n2;

if (n3 % 2 === 0){
    console.log(`The sum of ${n1} and ${n2} is even.`)
}
else {
    console.log(`The sum of ${n1} and ${n2} is odd.`)
}