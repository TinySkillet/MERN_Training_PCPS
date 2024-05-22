// 1. How can you use an if/else statement in JS to check if a number
// is  positive or negative? Provide a code example for both case.

let num = 15;

if(num < 0){
    console.log('Negative')
}
else if (num > 0){
    console.log('Positive')
}
else {
    console.log('Zero')
};


switch (true){
    case (num < 0):
        console.log("Negative")
        break;
    case (num > 0):
        console.log('Positive')
        break;
    default:
        console.log('Zero')
}


// 2. Write a JS program to check if a user is eligible to vote (18 years or older)
// using if/else statement. Provide the code to handle both cases.

user_age = 17

if (user_age < 18){
    console.log("You are not eligible to vote!")
}
else {
    console.log('You are eligible to vote!')
}


// 3. Create a switch case to determine the day of the week based on given number.
// Assume 1 is Sunday and 7 is Saturday

const day_ = 5;
switch(day_){
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thursday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break; 
    default:
        console.log('Invalid day!');
};


// 4. How can you use an if/else statement to check if a given string is longer than 10 characters or not? 

const str = 'alsdkjbja;lksjf'

if( str.length > 10){
    console.log('The string has more than 10 characters!')
} 
else{
    console.log('The string has less than 10 characters!')
}

/* 5. Write a JavaScript program to determine the grade of a student based 
 on their exam score using if/else statement. Assume scores are in the range of 0-100.
*/

const score = 67;

if (score >= 90){
    console.log('A+')
}
else if (score >= 80){
    console.log('A')
}
else if (score >= 70){
    console.log('B+')
}
else if (score >= 60){
    console.log('B')
}
else if (score >= 50){
    console.log('C')
}
else if (score >= 40){
    console.log('D')
}
else {
    console.log('F')
}


// 6. Write a code that takes a month number (1 - 12) as input and returns the number
// of days in that month using switch case
// sep, apr, june, nov - 30, feb - 29 (28 in leap), else 31

month_number = 4
switch (month_number){
    case 1:
        console.log('January has 31 days')
        break;
    case 2:
        console.log('February has 29 days')
        break;
    case 3:
        console.log('March has 31 days')
        break;
    case 4:
        console.log('April has 30 days')
        break;
    case 5:
        console.log('May has 31 days')
        break;
    case 6:
        console.log('June has 30 days')
        break;
    case 7:
        console.log('July has 31 days')
        break;
    case 8:
        console.log('August has 31 days')
        break;
    case 9:
        console.log('September has 30 days')
        break;
    case 10:
        console.log('October has 31 days')
        break;
    case 11:
        console.log('November has 30 days')
        break;
    case 12:
        console.log('December has 31 days')
        break;
    default:
        console.log('Invalid month number!')
    
}

// 7. How can you use an if/else statement to check if a given year is a leap year or not?

year = 1945

if (year % 4 === 0 && year % 100 !== 0){
    console.log('It is a leap year!')
}
else if (year % 400 == 0){
    console.log('It is a leap year!')
}
else {
    console.log('It is not a leap year!')
}

// 8. Program to calculate BMI.

const height_feet = 5;
const height_inches = 10;

const feet_in_meter = 0.304;
const height = (height_feet + height_inches/12) * feet_in_meter; 

const weight = 75;
const bmi = weight / height ** 2;

switch (true){
    case bmi <= 18:
        console.log('Underweight!')
        break;
    case bmi >= 24:
        console.log("Overweight!")
        break;
    default:
        console.log('Normal!')
}



