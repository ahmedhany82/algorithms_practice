// 268. Missing Number

var missingNumber = function(nums) {
    
    let array = new Array(nums.length + 1).fill(-1);
    
    for(let i = 0; i < nums.length; i++) {
       array[nums[i]] = 1;
    }
    
    for(let i = 0; i < array.length; i++) {
        if(array[i] === -1) return i;
    }
        
};

var missingNumber = function(nums) {
    
    let n = nums.length;
    let numSum = n * (n + 1) / 2;   
      
    for(let num of nums) {
        numSum -= num;
    }
       
    return numSum;
       
   }; 