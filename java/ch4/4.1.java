int depth(TreeNode root) {
    if (root == null) return 0;
    return Math.max(depth(root.left), depth(root.right)) + 1;
}
boolean isBalanced(TreeNode root) {
    if (root == null) return true;
    int leftDepth = depth(root.left);
    int rightDepth = depth(root.right);
    int diff = Math.abs(leftDepth - rightDepth);
    return (
        isBalanced(root.left) &&
        isBalanced(root.right) &&
        depth <= 1
    );
}
