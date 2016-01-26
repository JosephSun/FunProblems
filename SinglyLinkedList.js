/*Singly Linked List

A singly linked list is a data structure consisting of a group of nodes which together represent a sequence. Each node holds data and a pointer. The pointer refers to another node or, if it is the last node in the list, to null. In my implementation further below, the value property of a node holds the data and the next property holds the pointer. 

The first node in the list is pointed to by a head variable. The last node in the list is referenced by a tail variable. Here is a picture to help understand.

Let us call this linked list listOne. listOne.head would refer to the node with the value of 5 and listOne.tail would refer to the node with a value of 2. Though it is not shown here, listOne.tail.next points to null. 

Here is another way to think about it: 

Nodes of a singly-linked list are similar to directions in a bed manual. Each direction contains a note (e.g. “Screw the nails into the bar") and points to the next direction (e.g. “Go to step 7"). 

Time Complexity

-Insertion and deletion operations are easily implemented in a linked list. Their time complexity is O(1), constant time. 

-The time complexity of searching and accessing nodes is O(n), linear time. 

I will implement a singly linked list with functional instantiation. 

Brief Description of Functional instantiation. 
Inside a function, we create an object and attach instance methods and instance variables to the object. The function ends by returning that object.

Here is the function for creating nodes. */
var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*As said above, these individual node objects make up the linked list. Each node has two properties, a value property and a next property. This function takes one argument, a value, and attaches it to the value property. The next property will be assigned during the linked list instance method, addToTail. 

Here is a skeleton linked list with no instance methods. */

var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  return list;
};

/*The list variable is the object that will be returned. As you can see, every list object will have an instance variable labeled head and an instance variable labeled tail. 

addToTail: 
-An instance method that will add a new node to the list. */
 



var LinkedList = function(){
 var list = {};
  list.head = null;
  list.tail = null;
  list.addToTail = function(value){
    var newNode = Node(value);
    if(list.head === null) {
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };
  return list;
};

// addToTail first creates a new node and stores it in the newNode variable. The method then checks if this is the first node in the list, if it is then the function points the list’s head variable to newNode. If this is not the first node in the list then the function points the last node’s next property to the node that was just created. After this if/else statement is executed, the tail of the list is updated to point to the most recent node we created. 

// The time complexity of this method is O(1) (constant time) because the amount of operations is constant through all of the executions -creating a new Node, changing variables references and checking variable references-  regardless of input data.

// removeHead: 
// -An instance method that will remove the head of the list and return the value of that node. 

var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.removeHead = function(){
    var removedHeadValue = list.head.value;
    var afterCurrentHead = list.head.next;
    delete list.head;
    list.head = afterCurrentHead;
    return removedHeadValue;
  };

 return list;
};

/*removeHead starts off by setting the variable removedHeadValue to the current head’s value, this is so we can return this value later on. The function then sets the variable afterCurrent head to the second node in the list, this is because that node will be the new head. Then the function deletes the current head and sets the head variable to the second node in the list, now the first node. Finally, the node’s value that was deleted is returned. 

The time complexity of this method is O(1) (constant time) because the amount of operations the function does is constant regardless of the size of the list. In other words, the list could have two nodes or two thousand nodes, the number of operations remain the same.

contains:
-checks to see if there is a particular node in the list. */
 
var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

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

  return list;
};

/*The contains function searches through the entire list (in the worst case scenario) by first setting a variable, currentNode, to the first node in the list.Then the function iterates through the list. The function then checks if the currentNode’s value is the target value that we are looking for. If it is, then we return true because the particular node is in our list. If that predicate is not true, then the function moves on to check if currentNode is the last node in the list. If currentNode is the last node in the list, then the function returns false because the particular node that is being looked for is not in the list. If both of these if statements do not evaluate, then there are more nodes in the list and the function sets currentNode to the next node in the list.  

The time time complexity of the function is O(n) (linear time) because the amount of operations the function executes is dependent on the size of the list. When the list increases, so does the amount of operations the contains function does (assuming worst case scenario).   


The completed linked list, instance methods and all, can be found below. */


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



 list.addToTail = function(value){
    var newNode = Node(value);
    if(list.head === null) {
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };


  list.removeHead = function(){
    var removedHeadValue = list.head.value;
    var afterCurrentHead = list.head.next;
    delete list.head;
    list.head = afterCurrentHead;
    return removedHeadValue;
  };



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

