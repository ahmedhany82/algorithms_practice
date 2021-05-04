// 283. Move Zeroes - Easy

var moveZeroes = function(nums) {
    
    if(nums.length === 1) return nums;
    if(nums.length === 0) return nums;
    
    let result =[]
    let zeroCount = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            result.push(nums[i]);
        } else {
            zeroCount += 1;
        }
    }
    
    for(let i = 0; i < zeroCount; i++) {
        result.push(0);   
    }
    
    for(let i = 0; i < nums.length; i++) {
        nums[i] = result[i];
    }
};

let nums1 = [0,1,0,3,12];

moveZeroes(nums1); //Answer: [1,3,12,0,0]

console.log(nums1);

let nums2 = [0];

moveZeroes(nums2); //Answer: [0]

console.log(nums2);