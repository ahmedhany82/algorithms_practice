// 1594. Maximum Non Negative Product in a Matrix

const maxProductPath = function(grid) {
    
    let rows = grid.length;
    let cols = grid[0].length;

    const m = 1000000007;

    grid[rows-1][cols-1] = {max: grid[rows-1][cols-1], min: grid[rows-1][cols-1]};

    for(let i=rows-2; i>=0; i--) {
        grid[i][cols-1] = {max: grid[i][cols-1] * grid[i+1][cols-1].max, min: grid[i][cols-1] * grid[i+1][cols-1].min};
    }

    for(let j=cols-2; j>=0; j--) {
        grid[rows-1][j] = {max: grid[rows-1][j+1].max * grid[rows-1][j], min: grid[rows-1][j+1].min * grid[rows-1][j]};
    }

    for(let i = rows-2; i >= 0; i--) {
        for(let j = cols-2; j >= 0; j--) {
            grid[i][j] = {
                max: Math.max(grid[i][j] * grid[i+1][j].max, grid[i][j] * grid[i+1][j].min, grid[i][j] * grid[i][j+1].max, grid[i][j] * grid[i][j+1].min),
                min: Math.min(grid[i][j] * grid[i+1][j].max, grid[i][j] * grid[i+1][j].min, grid[i][j] * grid[i][j+1].max, grid[i][j] * grid[i][j+1].min)
            }
        }

    }  
    return (grid[0][0].max >= 0 ? grid[0][0].max  % m : -1);
};



const grid = [
    [-1,-4,2],
    [4,3,-1],
    [2,-4,4],
    [1,-1,-4]];  //Answer: 768

const grid2 = [ [2,1,3,0,-3,3,-4,4,0,-4],
                [-4,-3,2,2,3,-3,1,-1,1,-2],
                [-2,0,-4,2,4,-3,-4,-1,3,4],
                [-1,0,1,0,-3,3,-2,-3,1,0],
                [0,-1,-2,0,-3,-4,0,3,-2,-2],
                [-4,-2,0,-1,0,-3,0,4,0,-3],
                [-3,-4,2,1,0,-4,2,-4,-1,-3],
                [3,-2,0,-4,1,0,1,-3,-1,-1],
                [3,-4,0,2,0,-2,2,-4,-2,4],
                [0,4,0,-3,-4,3,3,-1,-2,-2]] //Answer: 19215865

const grid3 = [[-1,-2,-3],
               [-2,-3,-3],
               [-3,-3,-2]] //Answer: -1

const grid4 = [[1,-2,1],
              [1,-2,1],
              [3,-4,1]] //Answer: 8

const grid5 = [[1, 3],
              [0,-4]] //Answer: 0

const grid6 = [[ 1, 4,4,0],
              [-2, 0,0,1],
              [ 1,-1,1,1]] //Answer: 2

console.log(maxProductPath(grid));
console.log(maxProductPath(grid2));