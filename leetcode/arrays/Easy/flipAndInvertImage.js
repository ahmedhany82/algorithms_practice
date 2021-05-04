// 832. Flipping an Image - Easy

var flipAndInvertImage = function(image) {
    
    let result = Array(image.length).fill().map(() => new Array())
    
    for(let i = 0; i < image.length; i++) {
        
        for(let j = image[0].length - 1; j >= 0; j--) {
             result[i].push(image[i][j] === 0 ? 1: 0)
        }
    }
       
    return result;
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])); //Answer: [[1,0,0],[0,1,0],[1,1,1]]
console.log(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]])); //Answer: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
