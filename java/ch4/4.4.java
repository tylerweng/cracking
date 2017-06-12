class TreeNode {
    int data;
    TreeNode left;
    TreeNode right;
    public TreeNode(int data) {
        data = data;
        left = right = null;
    }
}

class LinkedList {
    int data;
    LinkedList next;
    public LinkedList(int data) {
        data = data;
        next = null;
    }
}

void createLevelLinkedList(TreeNode root,
                        ArrayList<LinkedList<TreeNode>> lists, int level) {
    if (root == null) return;
    LinkedList<TreeNode> list = null;
    if (lists.size() == level) {
        list = new LinkedList<TreeNode>();
        lists.add(list);
    } else {
        list = lists.get(level);
    }
    list.add(root);
    createLevelLinkedList(root.left, lists, ++level);
    createLevelLinkedList(root.right, lists, ++level);
}

ArrayList<LinkedList<TreeNode>> createLevelLinkedLists(TreeNode root) {
    ArrayList<LinkedList<TreeNode>> lists = new ArrayList<LinkedList<TreeNode>>();
    createLevelLinkedList(root, lists, 0);
    return lists;
}
