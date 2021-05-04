// 322. Coin Change - Medium
const coinChange = function(coins, amount) {
    
    const table = Array(amount + 1).fill(null);
    table[0] = [];

    for(let i=0; i<table.length; i++) {
        if(table[i] !== null) {
            for(element of coins) {
                if(i + element < table.length)
                {
                    const combination = [ ...table[i], element];
                    if(!table[i + element] || table[i + element].length > combination.length) {
                        table[i + element] = combination;
                    }    
                }
            }
        }
    }
    return table[amount] ? table[amount].length : -1;
};

console.log(coinChange([1,2,5],11)); //Answer: 3
console.log(coinChange([2],3));      //Answer:-1
console.log(coinChange([1],0));      //Answer: 0
console.log(coinChange([1],1));      //Answer: 1
console.log(coinChange([1],2));      //Answer: 2
