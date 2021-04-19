//237. Delete Node in a Linked List - Easy

const deleteNode = function(node) {
    
    node.val = node.next.val;
    node.next = node.next.next;
};

