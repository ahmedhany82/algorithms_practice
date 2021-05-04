// 21. Merge Two Sorted Lists - Easy

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

const a1 = new Node(2);
const a2 = new Node(4);
const a3 = new Node(5);
const a4 = new Node(7);
const a5 = new Node(8);
const a6 = new Node(14);

a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;
a5.next = a6;


const b1 = new Node(6);
const b2 = new Node(11);
const b3 = new Node(17);

b1.next = b2;
b2.next = b3;


print(a1);
console.log('---');
print(b1);


const mergeTwoLists = function(list1, list2) {
    if(list1 === null) return list2;
    if(list2 === null) return list1;

    if(list1.val <= list2.val) {
        let temp = list1.next;
        list1.next = 
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};

mergeTwoLists(a1, b1);


console.log('--- Result ---');
print(a1);
console.log('----');