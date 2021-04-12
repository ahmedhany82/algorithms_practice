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
        this._append(this.head, val)
    }

    _append(node, val) {
        if(node.next === null) {
            node.next = new Node(val);
            return;
        }
        this._append(node.next, val);
    }

    print() {
        let str = '';
        this._print(this.head, str);
    }

    _print(node, str) {
        if(node === null) {
            console.log(str);
            return;
        }
        str += node.value + "->";
        this._print(node.next, str);
    }

    contains(val) {
        let current = this.head;
        return this._contains(current, val);
    }

    _contains(node, val) {
        if(node !== null) {
            if(node.value === val) {
                return true;
            }
            return this._contains(node.next, val);
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