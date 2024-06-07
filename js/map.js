const numbers = [10, 20, 30, 40, 50];

const foundNumber = numbers.find(num => num > 30);
console.log(foundNumber);

const allFoundNumbers = numbers.filter(num => num > 30);
console.log(allFoundNumbers)

const squaredNumbers = numbers.map(num => num / 5)
console.log(squaredNumbers)