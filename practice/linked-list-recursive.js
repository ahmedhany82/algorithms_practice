// practice linked lists from https://youtube.com/playlist?list=PLxQ8cCJ6LyOar0c3BFaOS8E38eVT4fl-g

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(val) {
        if(this.head === null) {
            this.head = new Node(val);
            return;
        }
        this._append(this.head, val);
    }

    _append(node, val) {
        if(node.next === null) {
            node.next = new Node(val);
            return;
        }
        this._append(node.next, val);
    }

    print() {
        console.log(this._print(this.head));
    }

    _print(node) {
        if(node === null) {
            return '';
        }
        return node.value + "->" + this._print(node.next);
    }

    contains(val) {
        let current = this.head;
        return this._contains(current, val);
    }

    _contains(node, val) {
        if(node === null) return false;
        if(node.value === val) return true;
        return this._contains(node.next, val);
    }
}

const list = new LinkedList();
list.append(11);
list.append(7);
list.append(10);
list.append(2);

list.print();

// iterative sum of a linked list
// const sumList = (head) => {

//     let sum = 0;
//     let curr = head;
//     while(curr !== null) {
//         sum += curr.value;
//         curr = curr.next;
//     }
//     return sum;

// };  // O(n) time, O(1) space

// recursive sum of a linked list
const sumList = (head) => {
    
    if(head === null) return 0;
    return head.value + sumList(head.next);
} // O(n) time, O(n) space

console.log(sumList(list.head)); //30

// const deleteValue = (head, target) => {

//     if(head.value === target) {
//         let newHead = head.next;
//         head.next = null;
//         return newHead;
//     }

//     let prev = null;
//     let curr = head;

//     while(curr !== null) {
//         if(curr.value === target) {
//             prev.next = curr.next;
//             curr.next = null;
//             return head;
//         }
//         prev = curr;
//         curr = curr.next;
//     }
//     return head;
// };

// recursive deleteValue
const deleteValue = (head, target) => {

    if(head.value === target) {
        let newHead = head.next;
        head.next = null;
        return newHead;
    }
    _deleteValue(head, null, target);
    return head;
} // O(n) time and O(n) space

const _deleteValue = (curr, prev, target) => {
    
    if(curr === null) {         /* This base case should be first to avoid accessing curr.value when curr is null */
        return;
    }

    if(curr.value === target) {
        prev.next = curr.next;
        curr.next = null;
        return;
    }

    _deleteValue(curr.next, curr, target);
}

const print = (head) => {
    if(head === null) return;
    console.log(head.value);
    print(head.next);
}


const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a->b->c->d

print(a);

let newHead = deleteValue(a, "a");

console.log('---')
print(newHead);

let anotherNewHead = deleteValue(newHead, "b");

console.log('---')
print(anotherNewHead);