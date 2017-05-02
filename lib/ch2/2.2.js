// Implement an algorithm to find the nth to last element of a singly
// linked list.

const nthToLast = (list, n) => {
  let node1 = list;
  let node2 = list;
  for (let i = 0; i < n; i++) {
    if (!node2.next) return null;
    node2 = node2.next;
  }

  while (node2.next) {
    node1 = node1.next;
    node2 = node2.next;
  }

  return node1;
};

module.exports = nthToLast;
