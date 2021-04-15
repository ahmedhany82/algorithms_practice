// 206. Reverse Linked List - Easy

const reverseList = function(head) {

    let curr = head;
    let prev = null;
    
    while(curr !== null) {
        
        const next = curr.next;
        curr.next = prev;
        
        prev = curr;
        curr = next;
    }
    return prev;
};