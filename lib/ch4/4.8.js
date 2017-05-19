// You are given a binary tree in which each node contains a value
// Design an algorithm to print all paths which sum up to that value
// Note that it can be any path in the tree - it does not have to start
// at the root

const pathHelper = (node, target, currSum, currPath, paths) => {
  if (node === null) return path;
  let newSum = node.val + currSum;
  currPath.push(node.val);
  if (newSum === target) {
    paths.push(currPath);
  } else {
    if (node.left !== null) {
      pathHelper(node.left, target, newSum, currPath, paths);
    }
    if (node.right !== null) {
      pathHelper(node.right, target, newSum, currPath, paths);
    }
  }
};

const pathSum = (root, target) => {
  const paths = [];
  let currSum = 0;
  let currPath = [];
  pathHelper(root, currSum, currPath, paths);
  return paths;
};
