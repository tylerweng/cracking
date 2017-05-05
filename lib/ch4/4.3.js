// Given a sorted (increasing order) array, write an algorithm to
// create a binary tree with minimal height.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function createBinaryTree(arr, start = 0, end = arr.length) {
  if (start > end) return null;

  const midx = Math.floor(start + end / 2);
  const root = new Node(arr[midx]);
  root.left = createBinaryTree(arr, start, midx - 1);
  root.right = createBinaryTree(arr, midx + 1, end);

  return root;
}
