// 152. Maximum Product Subarray - Medium

// using Kadane's Algorithm
// faster than 98.52% of JavaScript submissions, less than 91.27% of submissions in memory usage.


const maxProduct = function(nums) {
    
    let currentSubarrayMax = currentSubarrayMin = maximumProduct = nums[0];

    for(let i = 1; i < nums.length; i++) {
        let temp = currentSubarrayMax;
        currentSubarrayMax = Math.max(nums[i], currentSubarrayMax * nums[i], currentSubarrayMin * nums[i]);
        currentSubarrayMin = Math.min(nums[i], temp * nums[i], currentSubarrayMin * nums[i]);

        maximumProduct = Math.max(currentSubarrayMax, currentSubarrayMin, maximumProduct);
    }

    return maximumProduct;


};

console.log(maxProduct([2,3,-2,4])); //Answer: 6
console.log(maxProduct([-2,0,-1])); //Answer: 0
console.log(maxProduct([-2,3,-4])); //Answer: 24