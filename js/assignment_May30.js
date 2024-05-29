console.log('\n')
// 1
console.log('1.\n')

const sum = (a, b) => a + b;
let x = 5;
let y = 10;
console.log(sum(x, y));

console.log('\n')

// 2
console.log('2.\n')

const getFirstElement = arr => arr[0];
let myArr = [5, 2, 1, 0, 3];
console.log(getFirstElement(myArr));

console.log('\n')

// 3
console.log('3.\n')

class Person{
    constructor(name, age, city){
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

function getPersonInfo(person){
    return `Name: ${person.name}, Age: ${person.age}, City: ${person.city}`
}

person = new Person('Aditya', 20, 'Lalitpur')
console.log(getPersonInfo(person))

console.log('\n')

// 4
console.log('4.\n')

function toUpperCase(str){
    let uppercased = ''
    for(char of str){
        uppercased += char.toUpperCase();
    }
    return uppercased;
}

let sample = 'manoj';
console.log(toUpperCase(sample))

console.log('\n')

// 5
console.log('5.\n')

const prd = (a, b) => a * b;
x = 5
y = 8
console.log(prd(x ,y))

console.log('\n')

// 6
console.log('6.\n')

const getLastElement = arr => arr[arr.length - 1];
arr = [1, 2, 3, 4, 5]
console.log(getLastElement(arr))

console.log('\n')

// 7
console.log('7.\n')

function getBookTitle(book){
    return book.title;
}

let book  = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1990
}
console.log(getBookTitle(book))

console.log('\n')

// 8
console.log('8.\n')

function reverseString(str){
    rev_str = ''
    for (let char of str){
        rev_str = char + rev_str;
    }
    return rev_str;
}

s = 'abcde';
console.log(reverseString(s));

console.log('\n')

// 9
console.log('9.\n')

const isEven = a => {return a % 2 == 0};
let a = 6
console.log(isEven(a));

console.log('\n')

// 10
console.log('10.\n')

const arrSum = function (arr){
    let sum = 0;
    for (num of arr){
        sum += num
    }
    return sum;
}

c = [1, 2, 3, 4, 5];
console.log(arrSum(c));

console.log('\n')

// 11
console.log('11.\n')

class Car{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

function getCarModel(car){
    return car.model;
}

let car = new Car('Toyota', 'Supra', '2011');
console.log(getCarModel(car))

console.log('\n')

// 12
console.log('12.\n')

const concatenateStrings = (str1, str2) => str1 + str2;
s1 = 'mayo';
s2 = 'nnaise';

console.log(concatenateStrings(s1, s2));

console.log('\n')

// 13
console.log('13.\n')

const square = a => a ** 2;
c = 5;
console.log(square(c));

console.log('\n')

// 14
console.log('14.\n')

function findMax(arr){
    largest = 0
    for (num of arr){
        if (num > largest){
            largest = num
        } 
    }
    return largest;
}

arr = [9, 1, 4, 6, 8, 12];
console.log(findMax(arr))

console.log('\n')

// 15
console.log('15.\n')

class Student{
    constructor(firstName, lastName, grade){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
    }
    
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

let student = new Student('Bibek', 'Magar', 'A');
console.log(student.getFullName())

console.log('\n')

// 16
console.log('16.\n')

const greet = name => `Hello ${name}!`;

let nam = 'Sandip';
console.log(greet(nam))

console.log('\n')

// 17
console.log('17.\n')

function doubleArray(arr){
    let doubled_arr = [];
    for (num of arr){
        doubled_arr.push(num * 2);
    }
    return doubled_arr;
}

c = [2, 3, 4, 5];
console.log(doubleArray(c))

console.log('\n')

// 18
console.log('18.\n')

let movie = {
    title: 'Inception',
    director: 'Hanz Zimmer',
    releaseYear: '2010'
}

function getMovieTitle(movie){
    return movie.title;
}

console.log(getMovieTitle(movie))

console.log('\n')

// 19
console.log('19.\n')

function getLength(str){
    let i = 0;

    while(str[i]){
        i += 1;
    }
    return i;
}

c = 'aditya';
console.log(getLength(c))

console.log('\n')

// 20
console.log('20.\n')

const subtract = (a, b) => a - b;
x = 10
b = 7
console.log(subtract(x, b))

console.log('\n')

// 21
console.log('21.\n')

function mergeArrays(arr1, arr2){

    return [...arr1, ...arr2]

}
arr1 = [1, 3, 5, 7]
arr2 = [2, 4, 6, 8]
console.log(mergeArrays(arr1, arr2))

console.log('\n')

// 22
console.log('22.\n')

const recipe = {
    name: 'Alovera Juice',
    ingredients: ['Alovera', 'Sugar', 'Soda', 'Artificial Colors'],
    servings: '100 ml'
}

function getIngredients(recipe){
    return recipe.ingredients;
}

console.log(getIngredients(recipe))

console.log('\n')

// 23
console.log('23.\n')
const endsWith = function(str, char){
    let last = str[str.length - 1];
    return last == char;
}

nam = 'Sandeep';
console.log(endsWith(nam, 's'));
console.log(endsWith(nam, 'p'));

console.log('\n')

// 24
console.log('24.\n')

const divide = (a, b) => Math.floor(a / b);
x = 5
y = 3
console.log(divide(x, y))

console.log('\n')

// 25
console.log('25.\n')

const removeFirstElement = arr => {return arr.slice(1, arr.length);}

arr = [2, 4, 6, 8, 10]
console.log(removeFirstElement(arr))

console.log('\n')

// 26
console.log('26.\n')

const album = {
    title: 'TRUE',
    artist: 'Avicii',
    tracks: ['Wake Me Up', 'Hey Brother', 'Addicted To You', 'You Make Me', 'Dear Boy']
}

function getTrackCount(album){
    return album.tracks.length;
}

console.log(getTrackCount(album))

console.log('\n')

// 27
console.log('27.\n')

const startsWith = (str, char) => str[0] == char;
let string = 'subsequent';
let character = 's'
let character2 = 'p'
console.log(startsWith(string, character))
console.log(startsWith(string, character2))

console.log('\n')

// 28
console.log('28.\n')

const isPositive = a => {
    if (a > 0){
        return true;
    }
    return false;
}

num = 0
console.log(isPositive(num))
num = 2
console.log(isPositive(num))

console.log('\n')

// 29
console.log('29.\n')

const countElements = arr => {
    i = 0;
    while (arr[i]){
        i += 1
    }
    return i
}

arr = [3, 2, 1, 4, 9, 1];
console.log(countElements(arr))

console.log('\n')

// 30
console.log('30.\n')

const game = {
    name: 'Minecraft',
    genre: 'Open World Simulator',
    platforms: ['xbox', 'windows', 'playstation', 'mac', 'linux', 'android', 'ios', 'nintendo'] 
}

const getPlatformList = game => game.platforms;
console.log(getPlatformList(game))