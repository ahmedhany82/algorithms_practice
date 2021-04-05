// 53. Maximum Subarray - Easy

const maxSubArray = function(nums) {


    if(nums.length === 1) return nums[0];

    const grid = Array(nums.length).fill().map(() => Array(nums.length).fill(0));

    let sum;
    let max = -1000000;
    for(let i = 0; i < nums.length; i++) {
        sum = 0;
        for(let j = i; j < nums.length; j++) {
            sum += nums[j]; 
            grid[i][j] = sum;
            if(grid[i][j] > max) max = grid[i][j];
        }
    } 

    return max;
    
};


console.log(maxSubArray( [5,4,-1,7,8] )); //Answer: 23
console.log(maxSubArray( [-2,1,-3,4,-1,2,1,-5,4] )); //Answer: 6
console.log(maxSubArray( [1] )); //Answer: 1