/* practicing the material from  https://youtu.be/oBt53YbR9Kk */

const bestSum = (targetSum, numbers, memo={}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    let shortestCombination = null;

    for(let number of numbers) {
        const remainder = targetSum - number;
        const remainderResult = bestSum(remainder, numbers, memo);
        if(remainderResult !== null) {
            const combination = [...remainderResult, number];
            if(shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }
    memo[targetSum] = shortestCombination;
    return memo[targetSum];
}

// console.log(bestSum(7, [5, 3, 4, 7])); // [7]
// console.log(bestSum(8, [2, 3, 5])); // [3,5]
// console.log(bestSum(8, [1, 4, 5])); // [4,4]
// console.log(bestSum(100, [1, 2, 5, 25])); // [25, 25, 25, 25]

//Fibonacci tabulation

// const fib = (n) => {
//     const table = Array(n+1).fill(0);
//     table[1] = 1;

//     for(let i=0; i<table.length; i++) {
//         if(i+1 < table.length) table[i+1] += table[i]; 
//         if(i+2 < table.length) table[i+2] += table[i];
//     }

//     return table[n];
// }

// console.log(fib(6));  //8
// console.log(fib(7));  //13
// console.log(fib(8));  //21
// console.log(fib(50)); //12586269025

// gridTraveler tabulation

const gridTraveler = (m,n) => {
    const table = Array(m+1).fill().map(() => Array(n+1).fill(0));
    table[1][1] = 1;

    for(let i = 0; i <= m; i++) {
        for(let j = 0; j <= n; j++) {
            const current = table[i][j];
            if(j+1 <= n) table[i][j+1] += current;
            if(i+1 <= m) table[i+1][j] += current;
        }
    }
    return table[m][n];
}


// console.log(gridTraveler(1,1)); //1
// console.log(gridTraveler(3,2)); //3
// console.log(gridTraveler(3,3)); //6
// console.log(gridTraveler(18,18)); //2333606220


// canSum tabulation

const canSum = (targetSum, numbers) => {

    const table = Array(targetSum + 1).fill(false);

    table[0] = true;

    for(let i = 0; i < table.length; i++) {
        if(table[i]) {
            for(let number of numbers) {
                if(i + number < table.length) table[i + number] = true;
            }
        }
    }
    return table[targetSum];
}

// console.log(canSum(7, [2, 3]));         //true
// console.log(canSum(7, [5, 3, 4, 7]));   //true
// console.log(canSum(7, [2, 4]));         //false
// console.log(canSum(8, [2, 3, 5]));      //true
// console.log(canSum(300, [7, 14]));      //false


// howSum tabulation

const howSum = (targetSum, numbers) => {

    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for(let i = 0; i < table.length; i++) {
        if(table[i] !== null) {
            for(let number of numbers) {
                if(i + number < table.length) table[i + number] = [...table[i], number];
            }
        }
    }
    return table[targetSum];
}



console.log(howSum(7, [2, 3]));         // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7]));   // [4, 3]
console.log(howSum(7, [2, 4]));         // null
console.log(howSum(8, [2, 3, 5]));      // [2, 2, 2, 2]
console.log(howSum(300, [7, 14]));      // null







