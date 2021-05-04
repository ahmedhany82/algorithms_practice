// 509. Fibonacci Number - Easy

var fib = function(n) {
    
    if(n === 0) return 0;
    if(n === 1) return 1;
    
    let table = Array(n+1).fill(0);
    
    table[1] = 1;
    
    for(let i = 2; i < table.length; i++) {
        table[i] = table[i-1] + table[i-2];
    }
    
    return table[table.length-1];
    
};