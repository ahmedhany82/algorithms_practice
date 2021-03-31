// 1594. Maximum Non Negative Product in a Matrix

const maxProductPath = function(grid) {
    
    let rows = grid.length;
    let cols = grid[0].length;

    for(let i=rows-2; i>=0; i--) {
        grid[i][cols-1] *= grid[i+1][cols-1];
    }

    for(let j=cols-2; j>=0; j--) {
        grid[rows-1][j] *= grid[rows-1][j+1];
    }

    for(let i = rows-2; i >= 0; i--) {
        for(let j = cols-2; j >= 0; j--) {
            grid[i][j] = Math.max(grid[i][j] * grid[i+1][j], grid[i][j] * grid[i][j+1])
        }
    }
    
    console.log(grid);
    
    return (grid[0][0] >= 0 ? grid[0][0] : -1);


};



const grid = [
    [-1,-4,2],
    [4,3,-1],
    [2,-4,4],
    [1,-1,-4]];

console.log(maxProductPath(grid));