const promiseOne = new Promise((resolve, reject) => {
    // do an async task
    // db calls, cryptography, network calls  
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    }, 1000)
})

// .then() has connection with resolve  
promiseOne.then(function(){
    console.log('Promise consumed')
})


new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log('Async task 2 is complete');
        resolve();
    })
}).then(function(){
    console.log('Async 2 resolved')
})


const promiseThree = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve({
            username: 'Aditya',
            email: 'mirageaditya@gmail.com'}
        )
    }, 1000)
})

// all values are returned to the function inside then
promiseThree.then(function(user){
    console.log(user)
})


const promiseFour = new Promise((resolve, reject) => {
    let error = false;
    if (!error){
        resolve({username: 'Manoj', password: 'manojgandu'})
    } else {
        reject('ERROR: Something went wrong!')
    }
})

promiseFour
.then((user) => {
    console.log(user)
    return user.username;
})
.then((username) => {
    console.log(username)
})
.catch((error) => {
    console.log(error)
})
.finally(() => console.log('The promise is either resolved or rejected'))


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = false;
        if (!error){
            resolve({username: 'Sandip', password: 'skibidiohio'});
        } else {
            reject('Error: Something went wrong at promiseFive!')      
        }
    }, 100)
})

async function consumePromise5(){
    try{
        const res = await promiseFive;
        console.log(res)
    } catch(error){
        console.log(error)
    }
}

consumePromise5();


// JSON request
async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    } catch(error){
        console.log('E: ', error);
    }
}

getAllUsers()