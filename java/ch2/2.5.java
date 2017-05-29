public Node findLoopStart(Node head) {
    if (head == null || head.next == null) return head;
    Set<Node> seen = new HashSet<>();
    Node curr = head;
    while (curr !== null) {
        if (seen.contains(curr)) return curr;
        seen.add(curr);
        curr = curr.next;
    }
}
