// JavaScript questions for loop

console.log('\n\n')

// 1.

console.log('Question 1.\n')
for(let i = 1; i <= 5; i ++){
    console.log(i)
}

console.log('\n\n')

// 2

console.log('Question 2.\n')
i = 2
while (i <= 10){
    console.log(i);
    i += 2;
};

console.log('\n\n')

// 3

console.log('Question 3.\n')
let sum = 0
for (let i = 1; i <= 10; i ++){
    sum += i;
};
console.log(sum);

console.log('\n\n')

// 4

console.log('Question 4.\n')
let num = 5;
let fact = 1;
i = 2;

while(i <= num){
    fact *= i
    i ++;
} 
console.log(fact)

console.log('\n\n')

// 5

console.log('Question 5.\n')
for (let i = 1; i <= 5; i++){
    console.log(i ** 2);
}

console.log('\n\n')

// 6

console.log('Question 6.\n')
i = 1
while (i <= 5){
    console.log(i ** 3);
    i ++;
};

console.log('\n\n')

// 7

console.log('Question 7.\n')
let arr = ['aditya', 'subarna', 'sandip', 'manoj']
for (i in arr){
    console.log(arr[i])
}

console.log('\n\n')

// 8

console.log('Question 8.\n')
arr = [1, 3, 5, 7, 9, 11, 13]
sum = 0
for (let j in arr){
    sum += arr[j]; 
};
console.log(sum);

console.log('\n\n')

// 9

console.log('Question 9.\n')
for (j in arr.reverse()){
    console.log(arr[j])
}

for (j = arr.length - 1; j >= 0; j --){
    console.log(arr[j])
}

console.log('\n\n')


// 10

console.log('Question 10.\n')
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

console.log('\n\n')

// 11

console.log('Question 11.\n')
sum = 0
for (i = 1; i <= 20; i ++){
    if (i % 2 == 0){
        sum += i
    }
}
console.log(sum)

console.log('\n\n')

// 12

console.log('Question 12.\n')
prd = 1
for (i = 1; i <= 15; i++){
    if (i % 2 != 0){
        prd *= i;
    }
}
console.log(prd)

console.log('\n\n')

// 13

console.log('Question 13.\n')
let pat = ''
for (i = 1; i <=5 ; i++){

    pat = ''
    for (let j =1; j <=i; j ++){
        pat += '*';
    };
    console.log(pat)
}

console.log('\n\n')

// 14

console.log('Question 14.\n')
i = 10
while (i >= 1){
    console.log(i);
    i --;
};

console.log('\n\n')

// 15

console.log('Question 15.\n')
fact = 1
num = 6
for (let i = num; i > 1; i --){
    fact *= i
}
console.log(fact)

console.log('\n\n')

// 16

console.log('Question 16.\n')
num = 123
sum = 0
while (num > 0){
    rem = num % 10
    sum += rem
    num = Math.floor(num / 10)
}
console.log(sum)

console.log('\n\n')

// 17

console.log('Question 17.\n')
for(i = 5; i > 0; i--){

    pat = '';
    for(j = 1; j <= i; j ++){
        pat += i;
    }
    console.log(pat)
}

console.log('\n\n')

// 18

console.log('Question 18.\n')
a = 0
b = 0
c = 1

for (i = 1; i <=10; i++){
    console.log(c)
    a = b
    b = c
    c = a + b
}

console.log('\n\n')

// 19

console.log('Question 19.\n')
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

console.log('\n\n')

// 20

console.log('Question 20.\n')
num = 12345
rev_num = 0

while(num > 0){
    rem = num % 10;
    rev_num = rev_num * 10 + rem;
    num = Math.floor(num / 10)
}
console.log(rev_num)