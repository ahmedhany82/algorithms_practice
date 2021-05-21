// 75. Sort Colors - Medium

var sortColors = function(nums) {
    
    let redCount = 0;
    let whiteCount = 0;
    let blueCount = 0;

    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            redCount += 1;
        } else if(nums[i] === 1) {
            whiteCount += 1;
        } else{
            blueCount += 1;
        }
    }
    
    for(let i = 0; i < nums.length; i++) {
        if(i < redCount) {
            nums[i] = 0;
        } else if(i < redCount + whiteCount) {
            nums[i] = 1;
        } else {
            nums[i] = 2;
        }
    }
    
};