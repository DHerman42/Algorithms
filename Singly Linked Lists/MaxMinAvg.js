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

    contains(val){
        let result = false;
        let runner = this.head;

        while(runner !== null && result === false){
            if(runner.data === val){
                result = true;
            }
            runner = runner.next;
        }
        return result;
    }

    length(){
        let count = 0;
        let runner = this.head;

        while(runner !== null){
            count++;
            runner = runner.next;
        }
        return count;
    }

    display(){
        let returnStr = "";
        let runner = this.head;

        while(runner !== null){
            returnStr += runner.data + ", ";
            runner = runner.next;
        }
        return returnStr
    }

    max(){
        let runner = this.head;
        
        if(runner === null){
            return null;
        }

        let max = runner.data;
        runner = runner.next;

        while(runner !== null){
            if(max < runner.data){
                max = runner.data;
            }
            runner = runner.next;
        }

        return max;
    }

    min(){
        let runner = this.head;
        
        if(runner === null){
            return null;
        }

        let min = runner.data;
        runner = runner.next;

        while(runner !== null){
            if(min > runner.data){
                min = runner.data;
            }
            runner = runner.next;
        }

        return min;
    }

    average(){
        let runner = this.head;
        if(runner === null){
            return null;
        }

        let count = 0;
        let total = 0;

        while(runner !== null){
            count++;
            total += runner.data;
            runner = runner.next;
        }
        return total / count;
    }
}

SLL1 = new SLL();

SLL1.addFront(18).addFront(5).addFront(73).addFront(42);

console.log(SLL1.max());
console.log(SLL1.min());
console.log(SLL1.average());