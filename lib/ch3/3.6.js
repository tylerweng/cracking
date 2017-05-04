// Implement stack using linked list

class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}

class Stack {

  static sort(stack) {
    if (!stack.isEmpty()) {
      const el = stack.pop();
      this.sort(stack);
      this.insert(el);
    }
  }

  static insert(el, stack) {
    if (!stack.isEmpty() && el.data > stack.top.data) {
      const top = stack.pop();
      this.insert(el, stack);
      stack.push(top);
    } else {
      stack.push(el);
    }
  }

  constructor() {
    this.top = new Node();
  }

  push(el) {
    const newNode = new Node(el);
    if (this.isEmpty()) {
      newNode.next = null;
    } else {
      newNode.next = this.top;
    }
    this.top = newNode;
  }

  pop() {
    if (!this.isEmpty()) {
      const temp = this.top;
      this.top = this.top.next;
      return temp;
    }
    return null;
  }

  peek() {
    return this.top;
  }

  isEmpty() {
    return this.top === null || this.top.data === null;
  }

}
