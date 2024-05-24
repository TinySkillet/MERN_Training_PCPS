// 1. Right Angled Triangle

for(let i=1; i <= 5; i++){
    pat = ''
    for (let j=1; j <= i; j++){
        pat += '*'
    }
    console.log(pat)
}

// 2. Solid Rectangle

for(let i = 1; i <=5; i++){
    pat = ''
    for (let j = 1; j <=7; j++){
        pat += '*';
    }
    console.log(pat)
};

// 3. Inverted Triangle

for (let i = 5; i >=1; i--){
    pat = ''
    for (let j = 1; j <= i; j++){
        pat += '*'
    }
    console.log(pat)
}

// 4. Pyramid

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

// 5. Inverted Pyramid

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


// Hollow Rectangle


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

// Cross


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

// X

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

// Number Triangle

for(let i = 1; i <= 5; i ++){
    k = 1
    pat = ''
    for (let j = 1; j <=i; j++){
        pat += k
        k += 1
    }
    console.log(pat)
}

// Repeated Number Triangle

for (let i = 1; i <=5; i++){
    pat = ''
    for( let j = 1; j <= i; j++){
        pat += i
    }
    console.log(pat)
}

// Inverted Number Triangle

for (let i = 1; i <=5; i++){
    pat = ''
    k = 1
    for(let j = 5; j >= i; j--){
        pat += k
        k += 1
    }
    console.log(pat)
}

// Inverted Number Square

for (let i = 1; i <=5; i++){
    pat = ''
    for (let j = 5; j >= 1; j--){
        pat += j
    }
    console.log(pat)
}

// Right Aligned Triangle

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

// Inverted Number Ladder

for (let i = 1; i <=5; i++){
    pat = ''
    for (let j = 1; j <= 5 - i + 1; j++){
        pat += j
    }
    console.log(pat)
}


// Alphabet Triangle

alpha = ['A', 'B', 'C', 'D', 'E']

for (let i = 1; i <=5; i++){
    pat = ''
    for (let j = 0; j < i ; j++){
        pat += alpha[j]
    }
    console.log(pat)
}

