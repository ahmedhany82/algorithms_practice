// 92. Reverse Linked List II - Medium

var reverseBetween = function(head, left, right) {
    let prev = null;
    let curr = head;
    let counter = 1;
    let startNode = head;
    let startNodePrev = null;
    
    if(left === right) return head;
    
    if(head.next === null) return head;
    
    while(curr !== null && counter <= right) {
        
        if(counter === left) {
            startNode = curr;
            startNodePrev = prev;
        }
        const next = curr.next;
        
        if(counter > left) curr.next = prev;
        
        prev = curr
        curr = next;
        counter++;
    }
    startNode.next = curr;
    if(startNodePrev !== null) {
        startNodePrev.next = prev;
        return head;
    }
    return prev;
};