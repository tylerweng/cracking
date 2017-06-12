class BTreeNode {
    BTreeNode left = null;
    BTreeNode right = null;
    int data;
    public BTreeNode(int data) { this.data = data; }
}

BTreeNode sortedArrToBTree(int[] nums, int start, int end) {
    if (start > end) return null;
    int mid = (start + end) / 2;
    int d = nums[mid];
    BTreeNode root = new BTreeNode(d);
    root.left = sortedArrToBTree(nums, start, mid - 1);
    root.right = sortedArrToBTree(nums, mid + 1, end);
    return root;
}
