// 83. Remove Duplicates from Sorted List - Easy

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const print = (head1) => {
    if(head1 === null) return;
    console.log(head1.val);
    print(head1.next);
}

const a1 = new Node(1);
const a2 = new Node(1);
const a3 = new Node(2);

a1.next = a2;
a2.next = a3;

print(a1);

const deleteDuplicates = function(head) {
    if(head === null) return null;
    if(head.next === null) return head;
    
    let curr = head;

    while(curr.next !== null) {
        
        if(curr.val === curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;            
        }       
    }
    return head;
};

console.log('---')

deleteDuplicates(a1);
print(a1);