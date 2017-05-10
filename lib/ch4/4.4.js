// Given a binary search tree, design an algorithm which creates
// a linked list of all the nodes at each depth (i e , if you have a
// tree with depth D, you’ll have D linked lists)
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const createBuckets = (root, buckets = {}, depth = 1)  => {
  if (root === null) return buckets;

  if (!buckets[depth]) buckets[depth] = [];
  buckets[depth].push(root.value);
  createBuckets(root.left, buckets, depth + 1);
  createBuckets(root.right, buckets, depth + 1);

  return buckets;
};

const createLists = buckets => {
  const lists = [];

  Object.keys(buckets).forEach(k => {
    const dummy = new Node(null);
    let node = dummy;
    const bucket = buckets[k];
    bucket.forEach(val => {
      node.next = new Node(val);
      node = node.next;
    });
    lists.push(dummy.next);
  });

  return lists;
};
