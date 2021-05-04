// 82. Remove Duplicates from Sorted List II - Medium

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
const a2 = new Node(2);
const a3 = new Node(3);
const a4 = new Node(3);
const a5 = new Node(3);
const a6 = new Node(5);

a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;
a5.next = a6;

const b1 = new Node(1);
const b2 = new Node(1);
const b3 = new Node(1);
const b4 = new Node(2);
const b5 = new Node(3);
const b6 = new Node(3);

b1.next = b2;
b2.next = b3;
b3.next = b4;
b4.next = b5;
b5.next = b6;


const deleteDuplicates = function(head) {

    if(head === null) return null;
    if(head.next === null) return head;
    
    let dummy = new Node(0);
    dummy.next = head;

    let current = dummy;

    while(current.next !== null && current.next.next !== null) {

        if(current.next.val === current.next.next.val) {
            let duplicate = current.next.val;

            while(current.next !== null && current.next.val === duplicate) {
                current.next = current.next.next;
            }

        } else {
            current = current.next;
        }
    }
    return dummy.next;
    
};


console.log('---');


print(a1);
console.log('---');
print(deleteDuplicates(a1));
console.log('---');
print(b1);
console.log('---');
print(deleteDuplicates(b1));
