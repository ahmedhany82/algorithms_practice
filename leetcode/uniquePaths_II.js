
// Time complexity: O(m*n)
// Space complexity: O(m*n)

const uniquePathsWithObstacles = (obstacleGrid) => {
    const m = obstacleGrid.length; //rows
    const n = obstacleGrid[0].length; //cols
    const table = Array(m+1).fill().map(() => Array(n+1).fill(0));
    table[1][1] = 1;
    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(obstacleGrid[i][j] === 1) table[i+1][j+1] = null;
        }
    }

    for(let i=0; i<=m; i++) {
        for(let j=0; j<=n; j++) {
            const current = table[i][j];
            if(table[i][j] !== null) {
                if(i+1 <= m && table[i+1][j] !== null) table[i+1][j] += current;
                if(j+1 <= n && table[i][j+1] !== null) table[i][j+1] += current;    
            }
        }
    }
    return table[m][n];
};