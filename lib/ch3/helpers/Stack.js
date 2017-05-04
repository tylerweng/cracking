// Plain stack for Hanoi

class Stack {

  static stackComparator(stk1, stk2) {
    if (stk1.length() !== stk2.length()) return false;
    for (let i = 0; i < stk1.length(); i++) {
      if (!this.elComparator(stk1.getEl(i), stk2.getEl(i))) return false;
    }
    return true;
  }

  static elComparator(el1, el2) {
    return el1 === el2;
  }

  constructor() {
    this.store = [];
  }

  push(el) {
    this.store.push(el);
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

}

module.exports = Stack;
