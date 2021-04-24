// 19. Remove Nth Node From End of List - Medium
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

const a1 = new Node("1");
const a2 = new Node("2");
const a3 = new Node("3");
const a4 = new Node("4");
const a5 = new Node("5");

a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;

const b1 = new Node("1");

const c1 = new Node("1");
const c2 = new Node("2");

c1.next = c2;

print(a1);
console.log('-----');
print(b1);
console.log('-----');
print(c1);

const removeNthFromEnd = function(head, n) {

    if(head.next === null && n === 1) return null;
    
    let runner1 = head;
    let runner2 = head.next;
    let prev = null;
    
    let gap = 1;
    
    while(runner2.next !== null) {
        
        runner2 = runner2.next;
        gap += 1;
        
        if(gap === n || n === 1) {
            prev = runner1;
            runner1 = runner1.next;
            gap -= 1;
        }        
    }
    if(n === 1) {
        runner1.next = null;
        return head;
    }
    if(prev !== null) {
        prev.next = runner1.next;
    } else {
        return head.next;
    }
    
    return head;
    
};