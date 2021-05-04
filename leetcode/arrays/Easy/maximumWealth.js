// 1672. Richest Customer Wealth - Easy

const maximumWealth = function(accounts) {
    
    let m = accounts.length; //rows
    let n = accounts[0].length; //cols
    
    let maxSum = 0;
    for(let i = 0; i < m; i++) {
        let rowSum = 0;
        for(let j = 0; j < n; j++) {
            rowSum += accounts[i][j];
        }
        if(rowSum > maxSum) {
            maxSum = rowSum;
        }  
    }
    return maxSum;
};

console.log(maximumWealth([[1,2,3],[3,2,1]])); //Answer: 6
console.log(maximumWealth([[1,5],[7,3],[3,5]])); //Answer: 10 
console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]])); //Answer: 17
