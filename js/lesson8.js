const arr1 = [1, 2, 3]
const arr2 = [5, 6, 7]

console.log([...arr1, ...arr2])


const obj1 = {a: 1, b: 2}
const obj2 = {c: 3, d: 4}
const mergedObj = {...obj1, ...obj2}

console.log(mergedObj)

let arr = [1, 2, 3, 4, 5]
console.log(arr[0], arr.slice(1))

const [a, b, ...rest] = arr;
console.log(a)
console.log(b)
console.log(rest)

function add(...numbers){
    return numbers.reduce((sum, num) => sum + num)
}

console.log(add(1, 2, 3, 4, 5))