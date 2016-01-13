//remove duplicates from an unsorted linked list

var Node = function(val) {
    return {
        value: val,
        next: null
    };
}

var linkedList = function (val) {
    var temp = Node(val);
    this.head = temp; 
    this.tail = temp; 
};

linkedList.prototype.add = function(val) {
    var temp = Node(val);
    this.tail.next = temp;
    this.tail = temp;
};

linkedList.prototype.removeDuplicates = function() {
    //storage for whether nodes have repeated
    var check = {};
    //to make sure the nodeBefore is node before the current 
    var count = 0;
    var nodeBefore = this.head; 
    var currentNode = this.head; 
    for (var i = 0; currentNode != null; currentNode = currentNode.next) {
        if (count === 2) {
            nodeBefore = nodeBefore.next; 
        } else {
            count++; 
        }
        if (check[currentNode.value] === undefined) {
            check[currentNode.value] = true;
        } else {
            //if the last node is a duplicate
            if (currentNode.next === null) {
                //make sure the tail switches to the second last
                this.tail = nodeBefore;
            }
            nodeBefore.next = currentNode.next;
        }
    }
};

var link = new linkedList('a');
link.add('b');
link.add('c');
link.add('b');
link.removeDuplicates();
console.log("link", link)

