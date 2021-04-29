// 328. Odd Even Linked List - Medium

var oddEvenList = function(head) {
    
    if(head === null) return null;
       
    let current = head;
    let nodeCount = 0;
    let dummyEven = new ListNode(0);
    let dummyOdd = new ListNode(0);
    
    let currentEven = dummyEven;
    let currentOdd = dummyOdd;
    
    while(current !== null) {
        
        nodeCount += 1;
        let lastNodeOdd;
        
        if(nodeCount % 2 === 0) {
            currentEven.next = current;
            currentEven = currentEven.next;
            lastNodeOdd = false;

        } else {
            currentOdd.next = current;
            currentOdd = currentOdd.next;
            lastNodeOdd = true;
        }
        
        current = current.next;
        if(lastNodeOdd) {
            currentEven.next = null;
        } else {
            currentOdd.next = null;
        }
    }
    
    currentOdd.next = dummyEven.next;
    return dummyOdd.next;
    
};

/*
Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]
*/

/*
Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]
*/