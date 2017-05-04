const Stack = require("./helpers/Stack.js");

class MyQueue {
  constructor() {
    this.iStack = new Stack();
    this.oStack = new Stack();
  }

  enqueue(data) {
    this.iStack.push(data);
  }

  dequeue() {
    if (iStack.isEmpty()) throw new Error("Can't dequeue empty queue");
    if (oStack.isEmpty()) {
      while (!iStack.isEmpty()) {
        oStack.push(iStack.pop());
      }
    }
    oStack.pop();
  }
}
