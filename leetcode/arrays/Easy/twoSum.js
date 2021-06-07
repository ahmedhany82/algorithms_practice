// 1. Two Sum - Easy
var twoSum = function(nums, target) {
    
    let map = {}
    
    for(let i=0; i < nums.length; i++) {
        map[nums[i]] = i;
    }
    
    for(let i=0; i < nums.length; i++) {
        let diff = target - nums[i];
        if(diff in map && map[diff] !== i) {
            return [i,map[diff]];
        }
    }
    
};