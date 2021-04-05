//1301. Number of Paths with Max Score - Hard

const pathsWithMaxScore = function(board) {
    
    const m = board.length;
    const n = board[0].length;

    const table = Array(m).fill().map(() => Array(n).fill(0));

    

    for(let i=0; i<board.length; i++) {
    table[i] = board[i].split("");
    }

    table[0][0] = 0;

    for(let i = m-3; i >= 0; i--) {
        if(table[i][n-1] !== 'X') table[i][n-1] = (table[i+1][n-1] !== 'X' ? parseInt(table[i][n-1]) + parseInt(table[i+1][n-1]) : 'X' ); 
    }

    for(let j = n-3; j >= 0; j--) {
        if(table[m-1][j] !== 'X') table[m-1][j] = (table[m-1][j+1] !== 'X' ? parseInt(table[m-1][j]) + parseInt(table[m-1][j+1]) : 'X' );
    }

    for(let i = m-2; i >= 0; i--) {
        for(let j = n-2; j>= 0; j--) {
                if(table[i][j] !== 'X') table[i][j] = Math.max( 
                    table[i][j+1] !== 'X' ? parseInt(table[i][j+1]) + parseInt(table[i][j]) : parseInt(-1), 
                    table[i+1][j] !== 'X' ? parseInt(table[i+1][j]) + parseInt(table[i][j]): parseInt(-1),
                    table[i+1][j+1] !== 'X' ? parseInt(table[i+1][j+1]) + parseInt(table[i][j]): parseInt(-1));    
            }
    }
    console.log(table)
    return table[0][0] === -1 ? [0,0] : table[0][0];
    
};


console.log(pathsWithMaxScore( ["E23","2X2","12S"] )); //Answer: [7,1]
console.log(pathsWithMaxScore( ["E12","1X1","21S"] )); //Answer: [4,2]
console.log(pathsWithMaxScore( ["E11","XXX","11S"] )); //Answer: [0,0]