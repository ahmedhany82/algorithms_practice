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