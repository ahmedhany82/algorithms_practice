// 61. Rotate List - Medium

var rotateRight = function(head, k) {
    
    
    if(head === null) return null;
    if(head.next === null) return head;
    
    let curr = head;
    let arr = [];
    
    while(curr !== null) {
        arr.push(curr.val);
        curr = curr.next;
    }
    
    let n = k % arr.length;
    
    if(n === 0) return head;
    
    for(let i=1; i<=n; i++) {
        let removed = arr.splice(arr.length - 1);
        arr.unshift(removed[0]);
    }
    
    let result = new ListNode(arr[0]);
    let prev = result;
    for(let i=1; i<arr.length; i++) {
        let node = new ListNode(arr[i]);
        prev.next = node;
        prev = node;
    }
    
    return result;
};