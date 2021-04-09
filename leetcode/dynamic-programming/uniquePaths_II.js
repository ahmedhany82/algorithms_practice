//63. Unique Paths II - Medium

// Time complexity: O(m*n)
// Space complexity: O(m*n)

const uniquePathsWithObstacles = (obstacleGrid) => {

    if(obstacleGrid[0][0] === 1) return 0;
    
    obstacleGrid[0][0] = 1;
        
    const rows = obstacleGrid.length;
    const cols = obstacleGrid[0].length;
    
    for(let i= 0; i<rows; i++) {
        for(let j = 0; j < cols; j++) {
            if( !(i === 0 && j === 0) ) {
                if(obstacleGrid[i][j] !== 1) {
                    obstacleGrid[i][j] = (i-1 >= 0 ? obstacleGrid[i-1][j] : 0) + (j-1 >=0 ? obstacleGrid[i][j-1] : 0);   
                } else {
                    obstacleGrid[i][j] = 0;                
                }                
            }
        }
    }
    return obstacleGrid[rows-1][cols-1];
};