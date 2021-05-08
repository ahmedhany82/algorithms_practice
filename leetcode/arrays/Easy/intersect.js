// 350. Intersection of Two Arrays II - Easy

var intersect = function(nums1, nums2) {
    
    let map = {};
    for(let i = 0; i < nums1.length; i++) {
        if(nums1[i] in map) {
            map[nums1[i]] += 1;
        } else {
            map[nums1[i]] = 1;            
        }
    }
    
    let result = [];
    for(let j = 0; j < nums2.length; j++) {
        if(nums2[j] in map && map[nums2[j]] !== 0) {
            result.push(nums2[j]);
            map[nums2[j]] -= 1;
            
        } 
    }
    
    return result;
    
};