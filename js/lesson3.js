function addTwoNumbers(a, b){
    return a + b
}

c = addTwoNumbers(4, 5)
console.log(c)

// objects

const person = {
    firstName: 'Aditya',
    lastName: 'Poudel',
    age: 50,
    eyeColor: 'blue'
};
console.log(person)

// another way to create objects

const person2 = {}
person2.firstName = 'John';
person2.lastName = 'Doe';
person2.age = 50;
person2.eyeColor = 'blue';

console.log(person2)

person2.gender = 'male'

// accessing objects

console.log(person2['firstName']);
console.log(person2['gender']);


age = 18;
if(age >= 22){
    console.log('Legal to drink!')
}
else if (age >= 18){
    console.log('Wait a few more years bud.')
}
else{
    console.log("You're underaged!!!!!!")
};


// sunday monday if else

const day = 4;
if (day == 1){
    console.log('Sunday')
}
else if (day == 2){
    console.log('Monday')
}
else if (day == 3){
    console.log('Tuesday')
}
else if (day == 4){
    console.log('Wednesday')
}
else if (day == 5){
    console.log('Thursday')
}
else if (day == 6){
    console.log('Friday')
}
else if (day == 7){
    console.log('Saturday')
}
else {
    console.log('Invalid day!!!')
};



// switch case
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
