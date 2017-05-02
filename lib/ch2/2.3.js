// Implement an algorithm to delete a node in the middle of a single
// linked list, given only access to that node
// EXAMPLE
// Input: the node ‘c’ from the linked list a->b->c->d->e
// Result: nothing is returned, but the new linked list looks like a->b->d->e

const deleteMiddleNode = middleNode => {
  const nextNode = middleNode.next;
  middleNode.value = nextNode.value;
  middleNode.next = nextNode.next;
  // Added return value for testing
  return middleNode;
};

module.exports = deleteMiddleNode;
