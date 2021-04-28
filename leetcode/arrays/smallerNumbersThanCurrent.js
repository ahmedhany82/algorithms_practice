// 1365. How Many Numbers Are Smaller Than the Current Number - Easy

var smallerNumbersThanCurrent = function(nums) {
       
    let sorted = nums.slice().sort((a,b) => {
        return a - b;
    });
    
    let map = {};
    let counter = 0;
    map[sorted[0]] = 0; 
    for(let i = 1; i < sorted.length; i++) {
        if(sorted[i] === sorted[i-1]) {
            map[sorted[i]] = map[sorted[i-1]];
        } else {
            map[sorted[i]] = i;
        } 
    }
    
    let result = [];
    for(let i = 0; i < nums.length; i++) {
        result[i] = map[nums[i]];
    }
    
    return result;
    
};