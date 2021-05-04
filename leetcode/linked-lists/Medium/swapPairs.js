// 24. Swap Nodes in Pairs - Medium

var swapPairs = function(head) {
    
    if(head === null) return null;
    if(head.next === null) return head;
    
    let dummy = new ListNode(0);
    dummy.next = head;
    
    let current = dummy
    
  
    while(current.next !== null && current.next.next !== null) {
        let firstNode = current.next;
        let secondNode = current.next.next;
                
        firstNode.next = secondNode.next;
        secondNode.next = firstNode;
        current.next = secondNode;
        
        current = current.next.next;
    }
    return dummy.next;
};