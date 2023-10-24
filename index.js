const LinkedList = function LinkedList(){
    let head = null;
    let tail = null;
    let size = 0;
    function append(value) {
        const newNode = Node();
        newNode.value = value;
        if(this.size == 0) {
            this.head = newNode;
            this.tail = newNode;
            this.size++;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.nextNode = newNode;
            current.next = newNode;
            this.tail = newNode;
            this.size++;
        };
    };
    function prepend(value) {
        const newNode = Node();
        newNode.value = value;
        if(size == 0) {
            this.head = newNode;
            this.tail = newNode;
            this.size++;
        } else {
            newNode.nextNode = this.head;
            this.tail = this.head;
            this.head = newNode;
            this.size++;
        };
    };
    function at(index) {
        let current = this.head;
        for(let counter = 0; counter < index; counter++){
            current = current.next;
        };
        return current;
    };
    function pop() {
        let current = this.head;
        while(current.next.next) {
            current = current.next;
        };
        current.next = current.next.next;
        current.nextNode = null;
        this.tail = current;
        this.size--;
    };
    function contains(value) {
        let current = this.head;
        for(let i = 0; i < this.size; i++){
            if(current.value == value){
                return true;
            } else current = current.next;
        };
        return false;
    };
    function find(value) {
        let counter = 0;
        let current = this.head;
        for(let i = 0; i < this.size; i++){
            if(current.value == value){
                return counter;
            } else current = current.next;
            counter++;
        };
        return null;
    };
    function toString() {
        let current = this.head.next;
        let string = ('( ' + this.head.value + ' )')
        for(let i = 1; i < this.size+1; i++){
            if(current){
                string += (' -> ( ' + current.value + ' )');
                current = current.next;
            } else string += '-> null';
        };
        return string;
    };
    return {
        head, tail, size, append, prepend, at, pop, contains, find, toString
    };
};

function Node() {
    let value = null;
    let nextNode = null;
    return {
        value, nextNode
    };
};

const myList = LinkedList();
myList.append('1');
myList.append('2');
myList.append('3');
console.log(myList.toString())