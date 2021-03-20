/*  Recursive approach  
    Time complexity: O(2^(m+n))
    Space complexity: O(m+n) 
    Times out on m=51,n=9
*/

// const uniquePaths = function(m,n) {
//     if( m === 1 && n === 1) return 1;
//     if( m === 0 || n === 0) return 0;

//     return uniquePaths(m-1, n) + uniquePaths(m, n-1);
// }

// console.log(uniquePaths(23,12))  //193536720  Runtime: 9408ms
// console.log(uniquePaths(51,9))  //1916797311  Times out


/* Using memoization */

const uniquePaths = function(m, n, memo={}) {
    const key = m + ',' + n;
    if(key in memo) return memo[key];
    if( m === 1 && n === 1) return 1;
    if( m === 0 || n === 0) return 0;

    memo[key] =  uniquePaths(m-1, n, memo) + uniquePaths(m, n-1, memo);
    return memo[key];
}

console.log(uniquePaths(23,12))  //193536720  Runtime: 68ms
console.log(uniquePaths(51,9))  //1916797311  Runtime: 104ms

