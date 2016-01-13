//remove duplicates from an unsorted linked list

var Node = function(val) {
    return {
        value: val
        next: null; 
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
    var check = {};
    var nodeBefore = this.head; 
    var pause = false; 
    var currentNode = this.head; 
    for (var i = 0; currentNode != null; currentNode = currentNode.next) {
        if (pause) {
            nodeBefore = nodeBefore.next; 
        } else {
            pause = false; 
        }
        if (check[currentNode.value])
    }
};

linkedList.prototype. = function() {
    
};

// Write duplicates from an unsorted linked list

