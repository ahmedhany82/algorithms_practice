// 64. Minimum Path Sum - Medium

const minPathSum = grid => {
    
    const rows = grid.length;
    const cols = grid[0].length;

    // fill columns
    for(let i = 1; i < rows; i++) {
        grid[i][0] += grid[i-1][0];  
    }

    for(let j = 1; j < cols; j++) {
        grid[0][j] += grid[0][j-1];
    }

    console.log(grid)

    for(let i = 1; i < rows; i++) {
        for(let j = 1; j < cols; j++) {
            grid[i][j] =  Math.min( grid[i][j] + grid[i-1][j] , grid[i][j] + grid[i][j-1] ) 
        }
    }
    return grid[rows - 1][cols - 1];
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]])); //7
console.log(minPathSum([[1,2,3],[4,5,6]])); //12