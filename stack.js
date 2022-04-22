var Stack = function(value) {
this.storage = {};
this.count = 0;
this.push = function(value) {
  this.storage[this.count] = value;
  this.count++ ;
  }
this.pop = function() {
  if(this.count === 0){
    return undefined;
    }
  else {
    this.count--;
    var storage = this.storage[this.count];
    delete storage;
    return storage;
    }
  }
this.size = function() {
  return this.count; 
  }
this.peek = function() { 
  return this.storage[this.count - 1];
  }
}
var myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.pop()
myStack.size()
myStack.peek()
myStack.push()
myStack.push("hossam")
myStack
myStack.pop(1)
myStack
myStack.size()
myStack.peek(0)
myStack.peek({0})
