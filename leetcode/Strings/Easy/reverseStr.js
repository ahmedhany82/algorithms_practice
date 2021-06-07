// 541. Reverse String II - Easy
const reverseStr = function(s, k) {
     
    let strArr = s.split('');
    
    for(let i = 0; i < strArr.length; i+= k*2) {
        let start = i;
        let end = Math.min(i + k - 1, strArr.length-1)
        
        while(start < end) {
            let temp = strArr[start];
            strArr[start++] = strArr[end];
            strArr[end--] = temp;
        }
    }
       
    return strArr.join('');
};