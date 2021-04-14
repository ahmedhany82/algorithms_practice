// practice linked lists from https://youtube.com/playlist?list=PLxQ8cCJ6LyOar0c3BFaOS8E38eVT4fl-g

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;    
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        if(this.head === null) {
            this.head = new Node(value);
            return;
        }
        let current = this.head;
        while(current.next !== null) {
            current = current.next;
        }
        current.next = new Node(value);
    }

    print() {
        let str = "";
        let current = this.head;
        while(current !== null) {
            str += current.value + "->";
            current = current.next; 
        }
        console.log(str);
    }

    contains(value) {
        let current = this.head;
        while(current !== null) {
            if(current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
}

// given a head of a linked list and a target value, delete the node with this value
const deleteValue = (head, target) => {

    if(head.value === target) {
        let newHead = head.next;
        head.next = null;
        return newHead;
    }

    let prev = null;
    let curr = head;

    while(curr !== null) {
        if(curr.value === target) {
            prev.next = curr.next;
            curr.next = null;
            return head;
        }
        prev = curr;
        curr = curr.next;
    }
    return head;
};  // O(n) time, O(1) space


const print = (head) => {
    if(head === null) return;
    console.log(head.value);
    print(head.next);
}

const list = new LinkedList();
list.append("a");
list.append("b");
list.append("c");
list.append("d");

// list.print();

// console.log(list.contains("a")); //true   
// console.log(list.contains("b")); //true 
// console.log(list.contains("t")); //false 
// console.log(list.contains("c")); //true 
// console.log(list.contains("d")); //true 
// console.log(list.contains("g")); //false

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a->b->c->d

print(a);

// iterative reverseList
// const reverseList = (head) => {
//     let prev = null;
//     let curr = head;

//     while(curr !== null) {

//         const next = curr.next;
//         curr.next = prev;

//         prev = curr;
//         curr = next;
//     }
//     return prev;
// } // O(n) time, O(1) space

// recursive reverseList -- could also be implemented with an optional parameter prev defaulted to null
const reverseList = (head) => {
    return _reverseList(head, null);
} // O(n) time, O(n) space

const _reverseList = (curr, prev) => {

    if(curr === null) return prev;
    const next = curr.next;
    curr.next = prev;
    return _reverseList(next, curr);
}



const newHead = reverseList(a);

console.log('---');
print(newHead);

// let newHead = deleteValue(a, "a");

// console.log('---')
// print(newHead);

// let anotherNewHead = deleteValue(newHead, "b");
 
// console.log('---')
// print(anotherNewHead);
