// 287. Find the Duplicate Number - Medium

var findDuplicate = function(nums) {
    
    let map = {};
    for(let i=0; i < nums.length; i++) {
        if(!(nums[i] in map)) {
            map[nums[i]] = 1;
        } else {
            return nums[i];
        }
    } 
};

console.log(findDuplicate([1,3,4,2,2])); //Answer: 2
console.log(findDuplicate([3,1,3,4,2])); //Answer: 3
console.log(findDuplicate([1,1])); //Answer: 1
console.log(findDuplicate([1,1,2])); //Answer: 1 
