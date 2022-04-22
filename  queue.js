function Queue() {
  var collection = [];
  this.print = function () {
    console.log(collection);
  };
  this.enqueue = function (element) {
    collection.push(element);
  };
  this.dequeue = function (element) {
    return collection.shift();
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.rear = function () {
    return collection[this.size() - 1];
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
}
var q = new Queue();
q.enqueue;
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue("z");

q.size();
q.print();
q.front();
console.log(`rear is: ${q.rear()}`);
