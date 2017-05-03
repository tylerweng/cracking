// How would you design a stack which, in addition to push and pop,
// also has a function min which returns the minimum element?
// Push, pop and min should all operate in O(1) time
const Stack = require("./3.2");

class SetOfStacks {

  constructor(capacity = 3) {
    this.capacity = capacity;
    this.store = [new Stack()];
  }

  lastStack() {
    return this.store[this.store.length - 1];
  }

  push(el) {
    const lastStack = this.lastStack();
    if (lastStack.length() === this.capacity) {
      const lastStackMin = lastStack.min();
      const newStack = new Stack();
      newStack.push(el);
      el = newStack.get(0);
      el.min = Math.min(
        lastStackMin,
        el.min
      );
      this.store.push(newStack);
    } else {
      lastStack.push(el);
    }
  }

  pop() {
    const lastStack = this.lastStack();
    lastStack.pop();
    if (lastStack.length() === 0) this.store.pop();
  }

  min() {
    const lastStack
  }

}

module.exports = Stack;
