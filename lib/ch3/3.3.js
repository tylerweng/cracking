// How would you design a stack which, in addition to push and pop,
// also has a function min which returns the minimum element?
// Push, pop and min should all operate in O(1) time
const Stack = require("./3.2");

class SetOfStacks {

  static setComparator(set1, set2) {
    if (set1.capacity !== set2.capacity) return false;
    if (set1.length() !== set2.length()) return false;
    for (let i = 0; i < set1.length(); i++) {
      const set1Stk = set1.getStack(i);
      const set2Stk = set2.getStack(i);
      if (!Stack.stackComparator(set1Stk, set2Stk)) return false;
    }
    return true;
  }

  constructor(capacity = 3) {
    this.capacity = capacity;
    this.store = [new Stack()];
  }

  getStack(i) {
    return this.store[i];
  }

  lastStack() {
    return this.store[this.length() - 1];
  }

  length() {
    return this.store.length;
  }

  push(el) {
    const lastStack = this.lastStack();
    if (lastStack.length() === this.capacity) {
      const lastStackMin = lastStack.min();
      const newStack = new Stack();
      newStack.push(el);
      el = newStack.getEl(0);
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
    const popped = lastStack.pop();
    if (lastStack.length() === 0) this.store.pop();
    return popped;
  }

  min() {
    return this.lastStack().min();
  }

  print() {
    for (let i = 0; i < this.length(); i++) {
      console.log(`Store ${i}:`);
      const stk = this.store[i];
      for (let j = 0; j < stk.length(); j++) {
        const el = stk.getEl(j);
        console.log(el);
      }
    }
  }

}

module.exports = SetOfStacks;
