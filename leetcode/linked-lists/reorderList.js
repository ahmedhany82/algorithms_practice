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




};


print(a);
console.log('---');
print(e);