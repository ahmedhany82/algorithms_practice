// 174. Dungeon Game - Hard

const calculateMinimumHP = dungeon => {


    if(dungeon.length === 0) return 0;

    const rows = dungeon.length;
    const cols = dungeon[0].length;

    dungeon[rows-1][cols-1] = Math.min(dungeon[rows-1][cols-1], 0);

    // last row
    for(let j = cols-2; j >= 0; j--) {
        dungeon[rows-1][j] = Math.min(dungeon[rows-1][j] + dungeon[rows-1][j+1], 0);   
    }

    // last col
    for(let i = rows-2; i >= 0; i--) {
        dungeon[i][cols-1] = Math.min( dungeon[i][cols-1] + dungeon[i+1][cols-1] , 0);  
    }

    for(let i = rows-2; i >= 0; i--) {
        for(let j = cols-2; j >= 0; j--) {
            dungeon[i][j] = Math.min(Math.max(dungeon[i+1][j], dungeon[i][j+1]) + dungeon[i][j],0);
         }
    }

    return Math.abs(dungeon[0][0]) + 1;
};

console.log(calculateMinimumHP([[-2,-3,3],[-5,-10,1],[10,30,-5]])); // 7
console.log(calculateMinimumHP([[0]])); // 1
console.log(calculateMinimumHP([[0,-5],[0,0]])) //1