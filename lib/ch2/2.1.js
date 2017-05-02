// Write code to remove duplicates from an unsorted singly linked list
// FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?

const removeDups = list => {
  let set = new Set();
  let priorNode = null;
  let currNode = list;

  while (currNode) {
    if (set.has(currNode.value)) {
      priorNode.next = currNode.next;
    }
    set.add(currNode.value);
    priorNode = currNode;
    currNode = currNode.next;
  }

  return list;
};

module.exports = removeDups;
