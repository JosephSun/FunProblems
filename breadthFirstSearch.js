/*
  * 
  * A pseudo-classical instantation of a breadth first select for a tree data structure. The function will return a list that contains the nodes that pass the filter callback. 
  * This assumes that each node can have as many children nodes as they want. 
*/

var Tree = function(value){
  this.value = value;
  this.children = [];
};


//the function that utilizes breadth first search. 
Tree.prototype.breadthFirstSelect = function(filter) {
  var results = [];
  if (filter(this.value)) {
    results.push(this.value);
  }
  var rfunc = function(array) {
    var nodesToCheck = [];
    for (var i = 0; i < array.length; i++) {
      if (filter(array[i].value)) {
        results.push(array[i].value);
      }
      if (array[i].children !== []) {
        for (var j = 0; j < array[i].children.length; j++) {
          nodesToCheck.push(array[i].children[j]);
          
        }
      }
    }
    if (nodesToCheck !== []){
      rfunc(nodesToCheck);
    }

  };
  rfunc(this.children);
  return results; 
  
};


//adds a child to the node. Need this for testing BFSelect
Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }

  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return child;
};

