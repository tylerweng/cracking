class Node {

  constructor(value) {
    this.value = value;
    this.next = null;
  }

  append(newTail) {
    let currNode = this;
    while (currNode.next) {
      currNode = currNode.next;
    }
    currNode.next = newTail;
  }

  isEqual(otherNode) {
    let node1 = this;
    let node2 = otherNode;

    while(node1) {
      if (node1.value !== node2.value) {
        return false;
      }
      node1 = node1.next;
      node2 = node2.next;
    }

    return node2 === null;
  }

  print() {
    let node = this;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }

}

module.exports = Node;
