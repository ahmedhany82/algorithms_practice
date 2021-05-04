// 442. Find All Duplicates in an Array - Medium

var findDuplicates = function(nums) {
    
    let lookup = {}
    let result = []
    for(let i = 0; i < nums.length; i++) {
        if(!(nums[i] in lookup)) {
          lookup[nums[i]] = 1;  
        } else {
          result.push(nums[i])
        } 
    }
    return result;
};

console.log(findDuplicates([4,3,2,7,8,2,3,1])); //Answer: [2,3]
console.log(findDuplicates([1,1,2])); //Answer: [1]
console.log(findDuplicates([1])); //Answer: []
