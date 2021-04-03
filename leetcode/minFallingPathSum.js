// 931. Minimum Falling Path Sum - Medium


const minFallingPathSum = function(matrix) {

    const m = matrix.length; //rows
    const n = matrix[0].length; //cols

    if(n === 1 && m === 1) return matrix[0][0];

    for(let i = 1; i < m; i++) {
        for(let j = 0; j < n; j++) {
            matrix[i][j] += Math.min( j-1 >= 0 ? matrix[i-1][j-1] : 200, matrix[i-1][j], j+1 < n ? matrix[i-1][j+1] : 200);
        }
    }
    
    return Math.min(...matrix[n-1]);
};


console.log(minFallingPathSum([[2,1,3],[6,5,4],[7,8,9]])); //13

console.log(minFallingPathSum([[-19,57],[-40,-5]])); //-59

console.log(minFallingPathSum([[-48]])); //-48