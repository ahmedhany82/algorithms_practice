// 1833. Maximum Ice Cream Bars - Medium

var maxIceCream = function(costs, coins) {
    let sorted = costs.sort((a,b) => a- b);
    
    let sum = 0;
    let count = 0;
    for(let i = 0; i < sorted.length; i++) {
        if(sum + sorted[i] <= coins) {
            sum += sorted[i];            
            count += 1;
        } else {
            return count;
        }
    }
    return count;
};