class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
    }

    addFront(val) {
        let new_node = new Node(val);

        new_node.next = this.head;
        this.head = new_node;
        return this;
    }

    removeFront(){
        if(this.head != null){
            this.head = this.head.next;
        }
        return this.head;
    }

    front(){
        if(this.head != null){
            return this.head.data;
        } else {
            return null;
        }
    }
}

SLL1 = new SLL();

SLL1.addFront(18).addFront(5).addFront(73);

console.log(SLL1);

console.log(SLL1.front());
SLL1.removeFront();
console.log(SLL1.front());
SLL1.removeFront();
console.log(SLL1.front());
SLL1.removeFront();
console.log(SLL1.front());