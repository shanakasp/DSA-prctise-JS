var Stack = function () {
  this.count = 0;
  this.storage = {};
};

// Add values to the end of the stack
Stack.prototype.push = function (value) {
  this.storage[this.count] = value;
  this.count++;
};

// Removes and returns the value at the end of the stack
Stack.prototype.pop = function () {
  if (this.count === 0) {
    return "Nothing to pop";
  }

  this.count--;
  var result = this.storage[this.count];
  delete this.storage[this.count];
  return result;
};

// Return the size of the stack
Stack.prototype.size = function () {
  return this.count;
};

// Returns the value at the end of the stack without removing it
Stack.prototype.peek = function () {
  return this.storage[this.count - 1];
};

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek()); // Output: 2
console.log(myStack.pop()); // Output: 2
console.log(myStack.size()); // Output: 1
