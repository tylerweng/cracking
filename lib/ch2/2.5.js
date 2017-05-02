// Given a circular linked list, implement an algorithm which returns node at the begin- ning of the loop
// DEFINITION
// Circular linked list: A (corrupt) linked list in which a node’s
// next pointer points to an earlier node, so as to make a loop in
// the linked list
// EXAMPLE
// input: A -> B -> C -> D -> E -> C [the same C as earlier]
// output: C

const findNodeAtLoopStart = list => {
  const set = new Set();
  let node = list;
  while (node) {
    if (set.has(node)) return node;
    set.add(node);
    node = node.next;
  }
};

module.exports = findNodeAtLoopStart;
