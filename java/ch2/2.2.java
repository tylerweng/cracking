public Node nthToLast(Node head, int n) {
    if (head == null) return head;
    Node slow = head;
    Node fast = head;
    for (int i = 0; i < n; i++) {
        if (fast.next == null) return null;
        fast = fast.next;
    }
    while (fast.next != null) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
}
