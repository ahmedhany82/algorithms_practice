// 203. Remove Linked List Elements - Easy

var removeElements = function(head, val) {
    
    if(head === null) return head;
    if(head.next === null) return (head.val === val ? null : head);
    
    let dummy = new ListNode(0);
    dummy.next = head;
    
    let current = dummy;
    
    while(current !== null && current.next !== null) {
        
        if(current.next.val === val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return dummy.next; 
};