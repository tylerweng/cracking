const deleteMiddleNode = middleNode => {
  const nextNode = middleNode.next;
  middleNode.value = nextNode.value;
  middleNode.next = nextNode.next;
  // Added return value for testing
  return middleNode;
};

module.exports = deleteMiddleNode;
