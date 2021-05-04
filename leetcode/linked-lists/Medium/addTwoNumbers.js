// 2. Add Two Numbers - Medium

var addTwoNumbers = function(l1, l2) {
    
    let result = new ListNode(0);
    let curr = result;
    
    
    while(curr !== null) {
        
        let sum = (l1 !== null ? l1.val : 0) + (l2 !== null ? l2.val : 0)
        
        curr.val += sum;
        
        let remainder = parseInt(curr.val / 10);
        
        curr.val = curr.val % 10;
        
        if(remainder !== 0 || ((l1 !== null && l1.next !== null) || 
           (l2 !== null && l2.next !== null))) curr.next = new ListNode(remainder);
        
        curr = curr.next;
        
        if(l1 !== null) l1 = l1.next;
        if(l2 !== null) l2 = l2.next;
    }
    return result;
};