/*What is a graph? 
A graph is a representation of a set of objects where some pairs of objects are connected by links. In other words, a graph is a set of nodes connected by lines, these lines are called edges- edges represent a path between one node to another node. 
A graph may be either undirected or directed.

Undirected Graphs: 


An undirected graph means that there is no restriction on the direction you can travel along the edges. Example: In the graph above, the edge (line) connecting A to B can be traveled from A to B and from B to A. 

Directed Graphs:


A directed graph means travel from one node to another node is dependent on the direction that the edge (line) allows. In the directed graph above, the edge (line) connecting A to B can be traveled from A to B but not from B to A- this is represented by the arrow. 




Some common terms when discussing graphs- I will be referencing the picture that only contains nodes A, B, C and D: 

Adjacency- Two nodes may be called adjacent if they are connected to each other by an edge (line). For example, A and B are adjacent, A and D are adjacent, B and C are adjacent, and B and D are adjacent. 

Degree- The degree of a node is the number of edges (lines) it contains. For example, A has a degree of two because A has an edge (line) linking it to B and A has an edge (line) linking it to D. 

Path- A path represents a sequence of nodes that are connected by edges. For example: If A was connected to B and B was connected to C, then a path representing A to C would be ABC



When can graphs be used? 

Nearly all graph problems will somehow use a grid or network in the problem. Social networks, such as Facebook, can be represented in a graph. Another instance where a graph can be used is when you are required to find a path of any sort. Finding the shortest path from San Francisco to New York is an example of this. 


Implementing a Graph using Javascript: 

I will implement this graph using pseudo-classical instantiation. If you are not familiar with pseudo-classical instantiation, then please read the following blog posts: 

http://www.ryanatkinson.io/javascript-instantiation-patterns/

http://www.willvillanueva.com/an-introduction-to-pseudoclassical-instantiation-patterns-and-subclassing-in-javascript/

http://javascript.info/tutorial/pseudo-classical-pattern

http://bensteinberg.co/blog/javascript-instantiation-patterns.html


The Graph will contain five instance methods: addNode, contains, removeNode, hasEdge and addEdge. 
*/
//pseudoclassical style

var Graph = function(){
  this.storage = {};
  this.index = 0;
  this.size = 0; 
};

/*The Graph constructor will return an object with three instance variables. The first instance variable, storage, will be a hash that contains the nodes. The second instance variable, index, will be the key in the key value pair for the nodes. The third instance variable, size, is an integer that represents the amount of nodes in the Graph. For example, if someone where to create a graph like so: 
*/
/*exampleGraph = new Graph();
exampleGraph; // {gstorage: {}, index: 0}
*/
Graph.prototype.addNode = function(node){
  this.storage[this.index] = NodeForGraph(node);
  this.index++;
  this.size++;
};


/*The addNode function stores a integer key to a node value in the storage variable. After this, the function increments the size variable of the Graph. For example:*/

/*exampleGraph.addNode(‘a’);
exampleGraph;  // {storage: {0 : ‘a’}, index: 1, size: 1}
exampleGraph.addNode(‘b’); 
exampleGraph; // { storage: {0 : {value: ’a’, edge: [] }, 1: {value: ’b’, edge: [] } }, index: 2, size: 2}*/
/*
The time complexity of addNode is O(1)-constant time- because the function is only completing two operations (storing value and adding index by 1) regardless of the input.

At this point it is important to note that the arguments for functions you have seen (node) and the arguments you will see later on in this blog (fromNode, toNode) are not the actual nodes. They are the values the nodes hold inside themselves. So the functions use these values to find actual node objects. */

Graph.prototype.contains = function(nodeValue){
  var foundNode = false;
  for (var property in this.storage){
    if (this.storage[property].value === nodeValue){
      foundNode = true;
    }
  }
  return foundNode;
};

/*The contains function first creates and sets a foundNode variable to false. It then iterates through every node in the storage variable. If the node is found then the foundNode variable is set to true. If the the foundNode variable is never found then the variable remains set to false. Finally, the foundNode variable is returned.
*/
/*exampleGraph; // { storage: {0 : {value: ’a’, edge: [] }, 1: {value: ’b’, edge: [] } }, index: 2, size: 2}
exampleGraph.contains(‘c’); // false
exampleGraph.contains(‘b’); // true
*/
/*The time complexity of this function is O(n) (linear time) because the function is traversing a  hash (traversing this.storage). This hash, might at times have 6 values or 100 values. So the amount of operations is dependent on the size of the hash.
*/
Graph.prototype.removeNode = function(node){
  for(var property in this.storage){
    if(this.storage[property].value === node){
      delete this.storage[property];
      this.size--;
    }
  }
};

/*The function removeNode starts off by iterating through the storage hash. If the node is found in the storage variable then that node is deleted from the hash and the size of the graph is decremented by one. */

// exampleGraph; // { storage: {0 : {value: ’a’, edge: [] }, 1: {value: ’b’, edge: [] } }, index: 2, size: 2 }
/*exampleGraph.removeNode(‘a’); 
exampleGraph; // { storage: {1: {value: ’b’, edge: [] } }, index: 2, size: 1}
exampleGraph.addNode(‘c’); 
exampleGraph; // { storage: {1: {value: ’b’, edge: [] }, 2: {value: ‘c’, edge: [] }, index: 3, size: 2}
*//*
The time complexity of removeNode is O(n) (linear time) because our function is iterating over a hash that at times has different sizes. That is to say that the amount of operations is directly dependent on the size of the hash and the size of the hash is not constant. */


Graph.prototype.addEdge = function(fromNode, toNode){
  for(var property in this.storage){
    if(this.storage[property].value === fromNode){
      this.storage[property].edge.push(toNode);
    } 
     if(this.storage[property].value === toNode){
      this.storage[property].edge.push(fromNode);
    }
  }

};
/*
The function addEdge starts by iterating through the storage hash. It then checks if the current node it is iterating over has a value equivalent to the fromNode argument. If it does, then it takes that node and stores the toNode in its edge. This same process takes place when the function finds the toNode.*/

/*exampleGraph; // { storage: {1: {value: ’b’, edge: [] }, 2: {value: ‘c’, edge: [] }, index: 3, size: 2}
exampleGraph.addEdge(‘b’, ‘c’);
exampleGraph; // { storage: {1: {value: ’b’, edge: [ ‘c’ ] }, 2: {value: ‘c’, edge: [ ‘b’ ] }, index: 3, size: 2}
*/
/*The time complexity of addEdge is O(n) (linear time) due to the amount of operations being directly dependent on the size of the hash (which is not constant). 
*/



Graph.prototype.hasEdge = function(fromNode, toNode){
  var foundEdge = false;
  for (var property in this.storage){
    var neededNode = this.storage[property];
    if(neededNode.value === fromNode ||  neededNode.value === toNode){
      for(var i = 0; i < neededNode.edge.length; i++){
        if(neededNode.edge[i] === fromNode || neededNode.edge[i] === toNode){
          foundEdge = true;
        }
      }
    }
  }
  return foundEdge;
};

/*The hasEdge function first creates and sets the foundEdge variable to false. Then the function iterates over every node in the hash. The function assigns the neededNode variable to the current node it is iterating over. It then checks whether the neededNode’s value is equal to either the fromNode argument or the toNode argument. If it is, then the function iterates over neededNode’s edges. If one of the edges match fromNode or toNode then the function sets foundEdge to true. Finally, the function returns foundEdge. 
*/
/*exampleGraph; // { storage: {1: {value: ’b’, edge: [] }, 2: {value: ‘c’, edge: [] }, index: 3, size: 2}
exampleGraph.hasEdge(‘a’, ‘b’); // false
exampleGraph.hasEdge(‘b’, ‘c’) // true

*/
/*The time complexity for hasEdge is O(n) (linear time). This may be a bit confusing at first because many would see nested for loops and jump to the conclusion of quadratic time. However, it is crucial to note that the inner for loop only runs twice in a worst case scenario, thus not increasing the order of magnitude for the time complexity. */

function NodeForGraph(val){
  var node = {
    value: val,
    edge: [],
    index: 0

  };
  return node;
}

/*
The function NodeForGraph creates and returns an object that has two properties. The first is value, which will be the data the graph is primarily associated with. The second is edge, which will be a collection of all the nodes the current node has a link to.

The time complexity for the NodeForGraph function is O(1) (constant time) due to the number of operations remaining the same regardless of any other factors. */

