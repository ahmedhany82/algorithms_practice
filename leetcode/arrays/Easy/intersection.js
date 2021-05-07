// 349. Intersection of Two Arrays - Easy

var intersection = function(nums1, nums2) {
        
    let map = {};
    for(let i = 0; i < nums1.length; i++) {
        map[nums1[i]] = 1;
    }
    
    let result = [];
    for(let i = 0; i < nums2.length; i++) {
        if(nums2[i] in map) result.push(nums2[i]);
    }
    
    return [...new Set(result)];
};

// using sets

var intersection = function(nums1, nums2) {
        
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    
    let result = [...set1].filter(e => set2.has(e));
    
    return result;
};