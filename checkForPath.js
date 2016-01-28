var Graph = function(){
  this.storage = {};
  this.index = 0;
  this.size = 0; 
};


Graph.prototype.addNode = function(node){
  this.storage[this.index] = NodeForGraph(node);
  this.index++;
  this.size++;
};

Graph.prototype.pathExists = function(firstNode, secondNode) {
    var checkNodeEdges = function(nodeChecked) {
        
    };
};
Graph.prototype.contains = function(nodeValue){
  var foundNode = false;
  for (var property in this.storage){
    if (this.storage[property].value === nodeValue){
      foundNode = true;
    }
  }
  return foundNode;
};

Graph.prototype.removeNode = function(node){
  for(var property in this.storage){
    if(this.storage[property].value === node){
      delete this.storage[property];
      this.size--;
    }
  }
};

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


function NodeForGraph(val){
  var node = {
    value: val,
    edge: [],
    index: 0

  };
  return node;
}