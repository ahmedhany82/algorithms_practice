// 160. Intersection of Two Linked Lists - Easy

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;    
    }
}

const print = (head) => {
    if(head === null) return;
    console.log(head.value);
    print(head.next);
}

const a1 = new Node("a1");
const a2 = new Node("a2");
const c1 = new Node("c1");
const c2 = new Node("c2");
const c3 = new Node("c3");

a1.next = a2;
a2.next = c1;
c1.next = c2;
c2.next = c3;

const b1 = new Node("b1");
const b2 = new Node("b2");
const b3 = new Node("b3");

b1.next = b2;
b2.next = b3;
b3.next = c1;
c1.next = c2;
c2.next = c3;


print(a1);
console.log('-----');
print(b1);

const getIntersectionNode = function(headA, headB) {

    if(headA === null || headB === null) return null;
    
    let pointer1 = headA;
    let pointer2 = headB;

    while(pointer1 !== pointer2) {
        if(pointer1 === null) {
            pointer1 = headB;
        } else {
            pointer1 = pointer1.next;
        }

        if(pointer2 === null) {
            pointer2 = headA;
        } else {
            pointer2 = pointer2.next;
        }
    }
    return pointer1;  
};

console.log("--------");

console.log(getIntersectionNode(a1, b1));