promiseSub = new Promise((resolve, reject) => {
    let x = 10;
    let y = 6;
    diff = x - y;
    if (diff < 5){
        resolve(`The difference of ${x} and ${y} is less than 5.`)
    } else {
        reject(`Error: The difference of ${x} and ${y} is not less than 5.`)
    }
})

promiseSub.then((msg) => {
    console.log(msg);
}).catch((error) => {
    console.log(error)
}) 


function fetchData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Promise resolved')
        }, 1000)
    })
}

async function getData(){
    const data = await fetchData();
    console.log(data);
}

getData();


// find, filter, map


/*
find: finds the first element in the array that satisfies the provided testing function.
It returns the value of the first element found, or 'undefined' if no element
satisfies the condition 

filter: finds all the element in the array that satisfies the provided testing function.
*/