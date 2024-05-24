// for loop

for(let i = 1; i <= 5; i ++){
    console.log(i)
}


for (let i = 10; i >= 0; i --){
    console.log(i)
}

// while loop

let count = 5;
while(count >= -1){
    console.log(count);
    count --; 
}

// do while loop

i = 0
do {
    console.log(i);
    i ++;
} while(i < 5);


// 2

i = 2
while (i <= 10){
    console.log(i);
    i += 2;
};

let sum = 0

// 3

for (let i = 1; i <= 30; i ++){
    sum += i;
};
console.log(sum);

// 4

let num = 5;
let fact = 1;
i = 2;

while(i <= num){
    fact *= i
    i ++;
} 
console.log(fact)

// 5

for (let i = 1; i <= 5; i++){
    console.log(i ** 2);
}

// 6

i = 1
while (i <= 5){
    console.log(i ** 3);
    i ++;
};

// 7

let arr = ['aditya', 'subarna', 'sandip', 'manoj']

for (i in arr){
    console.log(arr[i])
}

// 8

arr = [1, 3, 5, 7, 9, 11, 13]
sum = 0
for (let j in arr){
    sum += arr[j]; 
};
console.log(sum);


// 9

for (j in arr.reverse()){
    console.log(arr[j])
}

for (j = arr.length - 1; j >= 0; j --){
    console.log(arr[j])
}

// 10

arr = [1, 10, 23, 13, 4, 2];
max = 0
i = 0
while( i < arr.length) {
    if (arr[i] > max){
        max = arr[i];
    }
    i ++;
}
console.log(max)

// 11

sum = 0
for (i = 1; i <= 20; i ++){
    if (i % 2 == 0){
        sum += i
    }
}
console.log(sum)


// 12

prd = 1
for (i = 1; i <= 15; i++){
    if (i % 2 != 0){
        prd *= i;
    }
}
console.log(prd)

// 13

let pat = ''
for (i = 1; i <=5 ; i++){

    pat = ''
    for (let j =1; j <=i; j ++){
        pat += '*';
    };
    console.log(pat)
}


// 14

i = 10
while (i >= 1){
    console.log(i);
    i --;
};


// 15

fact = 1
num = 6
for (let i = num; i > 1; i --){
    fact *= i
}
console.log(fact)

// 16

num = 123
sum = 0
while (num > 0){
    rem = num % 10
    sum += rem
    num = Math.floor(num / 10)
}
console.log(sum)


// 17

for(i = 5; i > 0; i--){

    pat = '';
    for(j = 1; j <= i; j ++){
        pat += i;
    }
    console.log(pat)
}

// 18

a = 0
b = 0
c = 1

for (i = 1; i <=10; i++){
    console.log(c)
    a = b
    b = c
    c = a + b
}

// 19
for (i = 1; i <= 20; i++){

    let div = 0;
    for(j = 2; j < i; j++){
        if (i % j == 0){
            div ++;
        };
    };

    if(div == 0){
        console.log(i)
    }
}

// 20

num = 12345
rev_num = 0

while(num > 0){
    rem = num % 10;
    rev_num = rev_num * 10 + rem;
    num = Math.floor(num / 10)
}
console.log(rev_num)