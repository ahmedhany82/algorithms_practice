// 1338. Reduce Array Size to The Half - Medium

var minSetSize = function(arr) {
  
    let maxValue = Math.max(...arr);
    let integerCount = new Array(maxValue + 1).fill(0);
    
    for(let i = 0; i < arr.length; i++) {
        integerCount[arr[i]] += 1;
    }

    let sortedCount = integerCount.sort((a,b) => b - a);
    
    let minSize = arr.length / 2;
    let sum = 0;
    for(let i = 0; i < sortedCount.length; i++) {
        sum += sortedCount[i]
        if(sum >= minSize) {
            return i+1;
        }
    }
};