//1
console.log('\n1.\n')

let sum = (a, b) => a + b;
console.log(sum(4, 5))

console.log('\n')

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

console.log('\n')

// 3
console.log('3.\n')

let isEven = a => {
    if (a % 2 == 0){
        console.log(`${a} is even`)
    }    
    else {
        console.log(`${a} is odd`)
    }
}
isEven(3);

console.log('\n')

// 4
console.log('4.\n')

function reverse_string(str){
    rev_str = ''
    for (i in str){
        char = str[i]
        rev_str = char + rev_str
    }
    return rev_str
}

rev = reverse_string('abcde')
console.log(rev)

console.log('\n')

// 5
console.log('5.\n')

let greatest = function(arr){
    max_num = 0
    for (i in arr){
        num = arr[i]
        if (num > max_num){
            max_num = num
        } 
    }
    return max_num
};
arr = [9, 1, 5, 3, 0, -1. -6, 10]
console.log(greatest(arr))

console.log('\n')

// 6
console.log('6.\n')

function celciusToFahrenheit(c){
    // relation between celcius and fahrenheit: (C - 0) / 100 = (F - 32) / 180
    f = (180 * c ) / 100 + 32
    return f
}

celcius = 37
console.log(`${celcius}°C in fahrenheit is ${celciusToFahrenheit(celcius)}°F`);

console.log('\n')

// 7
console.log('7.\n')
random_num = (min, max) => {
    return Math.round(min + Math.random() * (max - min));
}

c = random_num(1, 9);
console.log(c)

console.log('\n\n')

// 8
console.log('8.\n')

isPalindrome = (str) => {
    rev = str.split('')
    rev = (rev.reverse().join(''))

    if (rev == str){
        console.log(`${str} is a palindrome`)
    }
    else {
        console.log(`${str} is not a palindrome`)
    }
}
isPalindrome('abcba')
isPalindrome('12345')

console.log('\n')

// 9
console.log('9.\n')

function getTitleCase(sentence){
    words = sentence.split(' ');

    // loop through each word
    for(i in words){
        // convert the word into an array
        letters = words[i].split('');

        // convert first letter to uppercase
        letters[0] = letters[0].toUpperCase()

        // join the letters into a word and reassign that new word to the array
        words[i] = letters.join('')
    }
    return words.join(' ')
}


sentence = 'a quick brown fox jumps over the lazy dog';
console.log(getTitleCase(sentence))

console.log('\n')

// 10
console.log('10.\n')

// recursion
fact = 1
function factorial(num){
    if (num == 1){
        return 1
    }
    return num * factorial(num - 1)
}

// no recursion
fact = 1
function factorial2(num){
    for (i = num; i > 1; i--){
        fact *= i
    }
    return fact
}
c = factorial(5)
console.log(c)

c = factorial2(5)
console.log(c)

console.log('\n')

// 11
console.log('11.\n')
let count = function(arr, ele){
    c = 0
    for (i in arr){
        if (arr[i] === ele){
            c += 1
        }
    }
    return c
}

nums = [1, 4, 6, 2, 9, 0, 2, 1, 2]
ele = 2
c = count(nums , ele)
console.log(`There are ${c} '${ele}'s in ${nums}`)

console.log('\n\n')

// 12
console.log('12.\n')
function isLeapYear(year){
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        return true;
    }
    return false;
}

console.log(isLeapYear(2000))
console.log(isLeapYear(2021))
console.log(isLeapYear(1990))
console.log(isLeapYear(2024))

console.log('\n')

// 13
console.log('13. \n')
function mergeArrays(arr1, arr2){

    for (i in arr2) {
        arr1.push(arr2[i])
    }
    arr1.sort()
}
arr1 = [2, 4, 1, 8, 0]
arr2 = [3, 5, 9, 5, 2]


console.log('arr1 = ' + arr1)
console.log('arr2 = ' + arr2)
mergeArrays(arr1, arr2)
console.log('After merge and sort = '+ arr1)
 
console.log('\n')

// 14
console.log('14.\n')
function numToRoman(number){
    const symbols = [
        ['I', 1], ['IV', 4], ['V', 5], ['IX', 9],
        ['X', 10], ['XL', 40], ['L', 50], ['XC', 90],
        ['C', 100], ['CD', 400], ['D', 500], ['CM', 900],
        ['M', 1000]]

    let roman = ''
    let count = 0

    for (i in symbols.reverse()){
        let sym = symbols[i][0]
        let value = symbols[i][1]

        if (number / value >= 1){
            count = Math.floor(number / value)
        
            r = ''
            for(i=1; i <= count; i++){
                r += sym
            }
            roman += sym

            number = number % value
        }
    }
    return roman
}

num = 99
rom = numToRoman(num)
console.log(`The roman of ${num} is ${rom}`)

console.log('\n')

// 15
console.log('15.\n')

function findSecondSmallest(arr){
    let first = Infinity;
    let second = Infinity;

    for (i in arr){
        if (arr[i] <= first){
            first = arr[i]
        }  
        else if (arr[i] <= second){
            second = arr[i] 
        }
    }
    // if there is no second smallest number, 
    if (second > first){
        return first;
    }
    return second;
}

arr = [1, 1, 1, 1,,1]
console.log(findSecondSmallest(arr))
 
console.log('/n')

// 16
console.log('16. \n')

area = radius => (Math.PI) * radius ** 2;
rad = 1
console.log(`Area of circle with radius ${rad} is ${area(rad)}`)

console.log('\n')

// 17
console.log('17. \n')

function truncate(str, length){

    truncated_part = str.slice(0, length);
    truncated_part += '...';
    
    return truncated_part
}

c = 'mayonaiise'
console.log(truncate(c, 5))

console.log('\n')

// 18
console.log('18.\n')

containsOnlyDigits = function(str){
    for (i in str){
        if (!Number(str[i])){
            return false;
        }
    }
    return true;
}

str = '1231a98'
console.log(containsOnlyDigits(str))

console.log('\n')

// 19
console.log('19.\n')

function removeAllFalsy(arr){
    write = 0

    for(let read = 0; read < arr.length; read++){
        char = arr[read]

        if (char){
            arr[write] = char
            write += 1
        }
    }
    return write
}
arr = [1,2, NaN, undefined, '', 44]
console.log('Before: ' + arr)
let w = removeAllFalsy(arr)
console.log('After: ' + arr.slice(0, w))

console.log('\n')

// 20
console.log('20.\n')

function generateNewArr(arr){

    let new_arr = []

    for(i in arr){
        char = arr[i]
        found = false

        for(i in new_arr){
            if (new_arr[i] == char){
                found = true
            }
        }
        
        if (!found){
            new_arr.push(char)
        }
    }
    return new_arr
}

c = [1, 2, 3, 3, 3, 1, 9, 9, 0]
console.log(generateNewArr(c))


