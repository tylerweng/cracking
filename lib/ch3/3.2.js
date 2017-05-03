// How would you design a stack which, in addition to push and pop,
// also has a function min which returns the minimum element?
// Push, pop and min should all operate in O(1) time

class Stack {

  static stackComparator(stk1, stk2) {
    if (stk1.length() !== stk2.length()) return false;
    for (let i = 0; i < stk1.length(); i++) {
      if (!this.elComparator(stk1.getEl(i), stk2.getEl(i))) return false;
    }
    return true;
  }

  static elComparator(el1, el2) {
    return el1.el === el2.el && el1.min === el2.min;
  }

  constructor() {
    this.store = [];
  }

  push(el) {
    let min;
    if (this.length() === 0) {
      min = el;
    } else {
      min = Math.min(
        this.store[this.length() - 1].min,
        el
      );
    }
    this.store.push({
      el,
      min
    });
  }

  pop() {
    return this.store.pop();
  }

  length() {
    return this.store.length;
  }

  getEl(i) {
    return this.store[i];
  }

  min() {
    return this.store[this.length() - 1].min;
  }

}

module.exports = Stack;
