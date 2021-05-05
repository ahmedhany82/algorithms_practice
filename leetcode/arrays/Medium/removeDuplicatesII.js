// 80. Remove Duplicates from Sorted Array II - Medium

var removeDuplicates = function(nums) {
    
    if(nums.length === 0) return 0;
    let repeated = null;
    let i = 0;
    for(let j = 1; j < nums.length; j++) {
        if(nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
            repeated = null;
        } else {
            if(repeated === null) {
                i++;
                nums[i] = nums[j];
                repeated = nums[i];
            }
        }
    }
    return i+1;
};