// 1721. Swapping Nodes in a Linked List - Medium


const swapNodes = function(head, k) {

    let dummy = new ListNode(0);
    dummy.next = head;
    
    let runner = dummy;
    let end = dummy;
    let start = dummy;

    
    for(let i = 1; i <= k; i++) {
        runner = runner.next;
        start = start.next;
    }
        
    while(runner !== null) {
        runner = runner.next;
        end = end.next;
    }
    
    if(start === end) return dummy.next;
    
    let temp = start.val;
    start.val = end.val;
    end.val = temp;
    
    return dummy.next;
}