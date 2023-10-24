const LinkedList = function LinkedList(){
    let listHead = null;
    let listTail = null;
    let listSize = 0;
    function head() {
        return listHead;
    };
    function tail() {
        return listTail;
    };
    function size() {
        return listSize;
    };
    function append(value) {
        const newNode = Node();
        newNode.value = value;
        if(listSize == 0) {
            listHead = newNode;
            listTail = newNode;
            listSize++;
        } else {
            let current = listHead;
            while(current.next) {
                current = current.next;
            }
            current.nextNode = newNode;
            current.next = newNode;
            listTail = newNode;
            listSize++;
        };
    };
    function prepend(value) {
        const newNode = Node();
        newNode.value = value;
        if(listSize == 0) {
            listHead = newNode;
            listTail = newNode;
            listSize++;
        } else {
            newNode.next = listHead;
            newNode.nextNode = listHead;
            listHead = newNode;
            listSize++;
        };
    };
    function at(index) {
        let current = listHead;
        for(let counter = 0; counter < index; counter++){
            current = current.next;
        };
        return current;
    };
    function pop() {
        let current = listHead;
        while(current.next.next) {
            current = current.next;
        };
        current.next = current.next.next;
        current.nextNode = null;
        listTail = current;
        listSize--;
    };
    function contains(value) {
        let current = listHead;
        for(let i = 0; i < listSize; i++){
            if(current.value == value){
                return true;
            } else current = current.next;
        };
        return false;
    };
    function find(value) {
        let counter = 0;
        let current = listHead;
        for(let i = 0; i < listSize; i++){
            if(current.value == value){
                return counter;
            } else current = current.next;
            counter++;
        };
        return null;
    };
    function toString() {
        let current = listHead.next;
        let string = ('( ' + listHead.value + ' )')
        for(let i = 1; i < listSize; i++){
            if(current){
                string += (' -> ( ' + current.value + ' )');
                current = current.next;
            };
        };
        string += '-> null';
        return string;
    };
    function insertAt(value, index) {
        let current = listHead;
        for(let counter = 0; counter < index-1; counter++){
            current = current.next;
        };
        const newNode = Node();
        newNode.value = value;
        newNode.next = current.next;
        newNode.nextNode = current.next;
        current.next = newNode;
        listSize++;
    };
    function removeAt(index) {
        let current = listHead;
        for(let counter = 0; counter < index-1; counter++){
            current = current.next;
        };
        current.next = current.next.next;
        listSize--;
    };
    return {
        head, tail, size, append, prepend, at, pop, contains, find, toString, insertAt, removeAt
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
myList.prepend('3');
console.log(myList.head())
console.log(myList.tail())
console.log(myList.size())
console.log(myList.toString())
myList.insertAt('4', 3)
console.log(myList.toString())
myList.removeAt('1');
console.log(myList.toString())