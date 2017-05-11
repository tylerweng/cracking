// Design an algorithm and write code to find the first common ancestor of
// two nodes in a binary tree Avoid storing additional nodes in a data
// structure NOTE: This is not necessarily a binary search tree

class BST {
  constructor(value) {
    this.value = value;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}

// const getHeight = node => {
//   let currNode = node;
//   let height = 1;
//   while (currNode.parent !== null) {
//     height++;
//     currNode = currNode.parent;
//   }
//   return height;
// };

// const getRoot = node => {
//   let currNode = node;
//   while (currNode.parent) {
//     currNode = currNode.parent;
//   }
//   return currNode;
// }

const lca = (root, node1, node2,) => {
  if (root === node1 || root === node2) return root;
  const left = lca(root.left, node1, node2);
  const right = lca(root.right, node1, node2);
  return (
    left === null
      ? right
      : right === null
          ? left
          : root
  );
};
