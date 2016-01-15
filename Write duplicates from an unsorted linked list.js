//remove duplicates from an unsorted linked list

//Functional Style

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;


  //Time Complexity comment: O(1) === constant time because the function is creating a new Node (which has a constant time operation), changing variables refrences and checking variable refrences. All these operations are constant time.  
  //
  list.addToTail = function(value){
    var newNode = Node(value);
    if(list.head === null) {
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  //Time Complexity comment: O(1) == constant time because the function is only doing instant(by instant, I mean that there is no iteration, recursion, etc... all our operations happen 'instantly')  operations here.
  list.removeHead = function(){
    var removedHeadValue = list.head.value;
    var afterCurrentHead = list.head.next;
    delete list.head;
    list.head = afterCurrentHead;
    return removedHeadValue;
  };


  //Time Complexity comment:O(n)  === linear time because the function, while searching the list, executes the iteration a number of times dependent on the list size. 
  list.contains = function(target){
    var currentNode = list.head;

    while(true){
      if(currentNode.value === target){
        return true;
      }
      if(currentNode.next === null){
        return false;
      }
      currentNode = currentNode.next;
    }
  };

//This function operates on linear time. 
  list.removeDuplicates = function() {
    //storage for whether nodes have repeated
    var check = {};
    //to make sure the nodeBefore is node before the current 
    var count = 0;
    var nodeBefore = list.head; 
    var currentNode = list.head; 
    for (var i = 0; currentNode !== null; currentNode = currentNode.next) {
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
                list.tail = nodeBefore;
            }
            nodeBefore.next = currentNode.next;
        }
    }
};


  return list;
};






