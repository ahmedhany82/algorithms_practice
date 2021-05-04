// 1366. Rank Teams by Votes - Medium

var rankTeams = function(votes) {
    
    if(votes.length === 1) return votes[0];
    
    let teamsMap = {}
    let rankMap = {}
    for(let i = 0; i < votes[0].length ; i++) {
        teamsMap[votes[0][i]] = i;    
        rankMap[i] = votes[0][i];
    }
    
    
    let rank = Array(votes[0].length).fill().map(() => Array(votes[0].length).fill(0));
    for(let i = 0; i < votes.length; i++) {
            
        for(let j = 0; j < votes[i].length; j++) {
            rank[teamsMap[votes[i][j]]][j] += 1;        
        }
        

    }
    
    console.log(rank)

};