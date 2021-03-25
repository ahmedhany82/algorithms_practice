// 174. Dungeon Game - Hard

const calculateMinimumHP = dungeon => {

    const rows = dungeon.length;
    const cols = dungeon[0].length;

    for(let i = 1; i < rows; i++) {
        dungeon[i][0] += dungeon[i-1][0]; 
    }

    for(let j = 1; j < cols; j++) {
        dungeon[0][j] += dungeon[0][j-1];  
    }

    for(let i = 1; i < rows; i++) {
        for(let j = 1; j < cols; j++) {
            const before = dungeon[i][j] + dungeon[i][j-1];
            const above = dungeon[i][j] + dungeon[i-1][j];
            dungeon[i][j] = ( Math.abs(before) < Math.abs(above) ? before : above );
        }
    }

    return (dungeon[rows-1][cols-1] <= 0 ? Math.abs(dungeon[rows-1][cols-1]) + 1 : dungeon[rows-1][rows-1]);

};

console.log(calculateMinimumHP([[-2,-3,3],[-5,-10,1],[10,30,-5]])); // 7
console.log(calculateMinimumHP([[0]])); // 1