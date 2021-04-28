// 448. Find All Numbers Disappeared in an Array - Easy

var findDisappearedNumbers = function(nums) {
    
    let result = new Array(nums.length + 1).fill(0);
    result[0] = null;
    
    for(let i=0; i<nums.length; i++) {
        result[nums[i]] = null;
    }
    
    let res = []
    for(let i=0; i<result.length; i++) {
        if(result[i] !== null) {
            res.push(i);
        }
    }
    return res;
};