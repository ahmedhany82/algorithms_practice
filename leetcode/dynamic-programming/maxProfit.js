// 121. Best Time to Buy and Sell Stock - Easy

var maxProfit = function(prices) {
    
    let min = 10001;
    let max = 0;
    for(let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i])
        max = Math.max(max, prices[i] - min);
    }
    return max;
};


console.log(maxProfit([7,1,5,3,6,4])); //Answer: 5
console.log(maxProfit([7,6,4,3,1])); //Answer: 0
