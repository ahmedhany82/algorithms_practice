// 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence - Easy

var isPrefixOfWord = function(sentence, searchWord) {
  
    if(sentence === '') return -1;
        
    let index = -1;
    
    let words = sentence.split(' ')
    
    for(let i = 0; i < words.length; i++) {
        if(words[i].indexOf(searchWord) === 0) {
            return i+1;            
        }
    }
    return index;    
    
};