// 867. Transpose Matrix - Easy

var transpose = function(matrix) {
    
    const m = matrix.length;
    const n = matrix[0].length;
    const result = new Array(n).fill(0).map(() => new Array(m).fill(0));
    
    for(let i = 0; i < matrix.length; i++) {
        
        for(let j = 0; j < matrix[0].length; j++) {
            result[j][i] = matrix[i][j]
        }
    }
    
    return result;
};