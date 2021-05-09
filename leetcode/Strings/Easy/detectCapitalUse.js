// 520. Detect Capital - Easy

var detectCapitalUse = function(word) {
    
    return(word.toLowerCase() === word 
           || word.toUpperCase() === word 
           || (word[0].toUpperCase() + word.slice(1).toLowerCase()) === word )    
};