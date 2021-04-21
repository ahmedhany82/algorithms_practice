// 1290. Convert Binary Number in a Linked List to Integer - Easy


// first attempt - to be optimized
var getDecimalValue = function(head) {

    if(head.next == null) return head.val;
    
    
    let current = head;
    let prev = null;
    
    while(current !== null) {
        
        const next = current.next 
        current.next = prev;
        
        prev = current;
        current = next;
    }
    
    current = prev;
    let num = 0;
    let factor = 1;
    
    while(current !== null) {
         
        num += factor * current.val;
        factor *= 2;
        current = current.next;
    }
    return num;

}