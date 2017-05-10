// Write an algorithm to find the ‘next’ node (i e , in-order successor)
// of a given node in a binary search tree where each node has a link to
// its parent

class BST {
  constructor(value) {
    this.value = value;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}

const nextNode = node => {
  let next;
  if (node.right === null) {
    next = node;
    while (next.parent !== null && next !== next.parent.left) {
      next = next.parent;
    }
    return next;
  } else {
    next = node.right;
    while (next.left !=== null) {
      next = next.left;
    }
    return next;
  }
}
