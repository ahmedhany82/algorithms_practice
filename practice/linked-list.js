// practice linked lists from https://youtu.be/TDtVagwa3QQ

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

const list = new LinkedList();
list.append("a");
list.append("b");
list.append("c");
list.append("d");

list.print();

console.log(list.contains("a")); //true   
console.log(list.contains("b")); //true 
console.log(list.contains("t")); //false 
console.log(list.contains("c")); //true 
console.log(list.contains("d")); //true 
console.log(list.contains("g")); //false