// Implement a function to check if a tree is balanced. For the purposes
// of this question, a balanced tree is defned to be a tree such that no
// two leaf nodes difer in distance from the root by more than one.

function isBalanced(node) {
  if (node === null) return true;

  const lHeight = height(node.left);
  const rHeight = height(node.right);

  return (
    Math.abs(lHeight - rHeight) <= 1
      && isBalanced(node.left)
      && isBalanced(node.right)
  );
}

function height(node) {
  if (node === null) return 0;
  return 1 + Math.max(height(node.left), height(node.right));
}
