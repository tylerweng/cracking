// Implement stack using linked list

class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}

class Stack {

  constructor() {
    this.top = new Node();
  }

  push(data) {
    const newNode = new Node(data);
    if (this.top.data === null) {
      newNode.next = null;
    } else {
      newNode.next = this.top;
    }
    this.top = newNode;
  }

  pop() {
    if (this.top.data !== null) {
      this.top = this.top.next;
    }
  }

  peek() {
    return this.top;
  }

  isEmpty() {
    return this.top.data === null;
  }
}

module.exports = Stack;
