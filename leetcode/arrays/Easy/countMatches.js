// 1773. Count Items Matching a Rule - Easy

var countMatches = function(items, ruleKey, ruleValue) {
    
    const map = {
        "type": 0,
        "color": 1,
        "name": 2
    }
    
    let count = 0;
    for(let i = 0; i < items.length; i++) {
        if(items[i][map[ruleKey]] === ruleValue) count += 1;
    }
    return count;
    
};

/*
Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], 
ruleKey = "color", ruleValue = "silver"
Output: 1

Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], 
ruleKey = "type", ruleValue = "phone"
*/