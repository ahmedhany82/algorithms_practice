// 143. Reorder List - Medium
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

const a = new Node("1");
const b = new Node("2");
const c = new Node("3");
const d = new Node("4");

a.next = b;
b.next = c;
c.next = d;

const e = new Node("1");
const f = new Node("2");
const g = new Node("3");
const h = new Node("4");
const i = new Node("5");

e.next = f;
f.next = g;
g.next = h;
h.next = i;

const reorderList = function(head) {

    if(head.next === null) return head;

    let curr = head;
    let prev = null;
    let index = 0;
    while(curr !== null) {
        index += 1;
        curr = curr.next;
    }
    const mid = Math.ceil(index / 2);

    curr = head;
    let newHead = null;

    index = 1;
    while(curr !== null) {
        if(index === mid) {
            newHead = curr.next;
            curr.next = null;
        }
        curr = curr.next;
        index += 1;
    }
    curr = newHead;
    while(curr !== null) {
        const next = curr.next;
        curr.next = prev;

        prev = curr;
        curr = next;
    }
    newHead = prev;

    let curr1 = head;
    let curr2 = newHead;

    while(curr1 !== null && curr2 !== null) {
        const temp1 = curr1.next;
        const temp2 = curr2.next;
        curr1.next = curr2;
        curr2.next = temp1;
        curr1 = temp1;
        curr2 = temp2;
    }

};


print(a);
reorderList(a);
console.log('---');
print(a);
console.log('------');
print(e);
console.log('---');
reorderList(e);
print(e)