// 1189. Maximum Number of Balloons - Easy

var maxNumberOfBalloons = function(text) {
    
    map = { 'b': 0, 'a': 0, 'l': 0, 'o': 0, 'n': 0}
    for(let i = 0; i < text.length; i++) {
        if(text[i] in map) {
            map[text[i]] += 1;
        }
    }
    let num = 100000;
    for(let char in map) {
        if(char === 'l' || char === 'o') {
            num = Math.min(num, parseInt(map[char]/2));
        }
        num = Math.min(num, map[char]);
    }
    
    return num;
};