// 1289. Minimum Falling Path Sum II - Hard
// faster than 22.77% JS submissions, less than 19.80% in memory usage.

const minFallingPathSum = function(arr) {
    
    const m = arr.length;    //rows
    const n = arr[0].length; //cols

    if(m === 1 && n === 1) return arr[0][0];

    for(let i = 1; i < m; i++) {
        for(let j = 0; j < n; j++) {
            let tempArr = arr[i-1].slice();
            tempArr.splice(j,1);
            arr[i][j] += Math.min(...tempArr);
        }
    }
    return Math.min(...arr[m-1]);
};


console.log(minFallingPathSum( [[1,2,3],[4,5,6],[7,8,9]] )); //13