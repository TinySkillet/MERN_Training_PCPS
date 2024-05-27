console.log('\n\n')
// 2
console.log('2.\n')

let numbers = [4, 2, 1, 3, 5];

function findAverage(numbers){
    sum = 0
    for(i in numbers){
        sum += numbers[i]
    }
    return sum / numbers.length
}
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let avg = findAverage(numbers)
console.log(avg)