// 139. Word Break - Medium

var wordBreak = function(s, wordDict, memo={}) {
    
    if(s in memo) return memo[s];
    if(s === '') return true;
    
    for(let word of wordDict) {
        if(s.indexOf(word) === 0) {
            const suffix = s.slice(word.length);
            if(wordBreak(suffix, wordDict, memo)) {
                memo[s] = true;
                return memo[s];
            }
        }
    }
    memo[s] = false;
    return memo[s];
};

console.log(wordBreak("leetcode",["leet","code"])); // true
console.log(wordBreak("applepenapple",["apple","pen"])); // true
console.log(wordBreak("catsandog",["cats","dog",")sand","and","cat"])); // false