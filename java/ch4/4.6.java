class BTreeNode {
    BTreeNode left;
    BTreeNode right;
    int data;
    public BTreeNode(int data) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

BTreeNode lca(BTreeNode root, BTreeNode n1, BTreeNode n2) {
    if (root == n1 || root == n2) return root;
    BTreeNode left = lca(root.left, n1, n2);
    BTreeNode right = lca(root.right, n1, n2);
    return (
        left == null
            ? right
            : right == null
                ? left
                : root
    );
}
