// 263. Ugly Number - Easy
const isUgly = (n, memo={}) => {
    if(n in memo) return memo[n];
    if(n === 0) return false;
    if(n === 1) return true;
    if(!Number.isInteger(n)) return false;

    const factors = [2, 3, 5];

    for(factor of factors) {
        let newNumber = n / factor;
        let result = isUgly(newNumber);
        if(result === true) {
            memo[n] = true;
            return memo[n];
        }
    }
    memo[n] = false;
    return memo[n];
};


console.log(isUgly(6));  //true
console.log(isUgly(8));  //true
console.log(isUgly(14)); //false
console.log(isUgly(1));  //true