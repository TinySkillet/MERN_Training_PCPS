// 1. Right Angled Triangle
console.log('1.\n')
for(let i=1; i <= 5; i++){
    pat = ''
    for (let j=1; j <= i; j++){
        pat += '*'
    }
    console.log(pat)
};

console.log('\n\n')

// 2. Solid Rectangle
console.log('2.\n')
for(let i = 1; i <=5; i++){
    pat = ''
    for (let j = 1; j <=7; j++){
        pat += '*';
    }
    console.log(pat)
};

console.log('\n\n')

// 3. Inverted Triangle
console.log('3.\n')
for (let i = 5; i >=1; i--){
    pat = ''
    for (let j = 1; j <= i; j++){
        pat += '*'
    }
    console.log(pat)
}

console.log('\n\n')

// 4. Pyramid
console.log('4.\n')
for (let i = 1; i <= 5; i++){

    pat = ''
    for (let k = 5 - i; k >= 1; k--){
        pat += ' ';
    }
    for (let j = 1; j <= 2 * i - 1; j++){
        pat += '*'        
    }
    console.log(pat)
}

console.log('\n\n')

// 5. Inverted Pyramid
console.log('5.\n')
for (let i = 1; i <=5; i++){

    pat = ''
    for (let k = 1; k < i; k++){
        pat += ' '
    }

    for (let j = 1; j <= 2 * (5 - i) + 1; j++){
        pat += '*'
    }
    console.log(pat)
}

console.log('\n\n')

// 6. Hollow Rectangle
console.log('6.\n')
for (let i = 1; i <= 5; i++){
    pat = ''
    for (let j = 1; j <= 7; j++){
        if (i == 1 || i == 5 || j == 1 || j == 7){
            pat += '*';
        }
        else{
            pat += ' ';
        }
    }
    console.log(pat)
}

console.log('\n\n')


// 7. Cross
console.log('7.\n')
for (let i = 1; i <= 5; i++){

    pat = ''
    for (let j = 1; j <=5; j++){
        if(i == j || j == 5 - i + 1){
            pat += '*'
        }
        else {
            pat += ' '
        }
    }
    console.log(pat)
}

console.log('\n\n')

// 8. X
console.log('8.\n')
for (let i = 1; i <=5; i++){

    pat = ''
    for(let j = 1; j <= 5; j++){
        if (j == i || j == 5 - i + 1){
            pat += '*'
        }
        else {
            pat += ' '
        }
    }
    console.log(pat)
}

console.log('\n\n')

// 9. Number Triangle
console.log('9.\n')
for(let i = 1; i <= 5; i ++){
    k = 1
    pat = ''
    for (let j = 1; j <=i; j++){
        pat += k
        k += 1
    }
    console.log(pat)
}

console.log('\n\n')

// 10. Repeated Number Triangle
console.log('10.\n')
for (let i = 1; i <=5; i++){
    pat = ''
    for( let j = 1; j <= i; j++){
        pat += i
    }
    console.log(pat)
}

console.log('\n\n')

// 11. Inverted Number Triangle
console.log('11.\n')
for (let i = 1; i <=5; i++){
    pat = ''
    k = 1
    for(let j = 5; j >= i; j--){
        pat += k
        k += 1
    }
    console.log(pat)
}

console.log('\n\n')

// 12. Inverted Number Square
console.log('12.\n')
for (let i = 1; i <=5; i++){
    pat = ''
    for (let j = 5; j >= 1; j--){
        pat += j
    }
    console.log(pat)
}

console.log('\n\n')

// 13. Right Aligned Triangle
console.log('13.\n')
for (let i = 1; i <= 5; i++){
    pat = ''
    for (let j = 1; j <= 5 - i; j++){
        pat += ' '
    }
    for (let k = 1; k <= i; k++){
        pat += '*'
    }
    console.log(pat)
}

console.log('\n\n')

// 14. Inverted Number Ladder
console.log('14.\n')
for (let i = 1; i <=5; i++){
    pat = ''
    for (let j = 1; j <= 5 - i + 1; j++){
        pat += j
    }
    console.log(pat)
}

console.log('\n\n')

// 15. Alphabet Triangle
console.log('15.\n')
alpha = ['A', 'B', 'C', 'D', 'E']

for (let i = 1; i <=5; i++){
    pat = ''
    for (let j = 0; j < i ; j++){
        pat += alpha[j]
    }
    console.log(pat)
}