class Node {
    Node next = null;
    int data;
    public Node(int d) { data = d; }
    void appendToTail(int d) {
        Node end = new Node(d);
        Node n = this;
        while (n.next != null) n = n.next;
        n.next = end;
    }
}

public Node removeDups(Node head) {
    Set<Integer> seen = new HashSet<>();
    Node curr = head;
    Node prev = new Node(0);
    while (curr != null) {
        if (seen.contains(curr.data)) {
            prev.next = curr.next;
        }
        seen.add(curr.data);
        prev = curr;
        curr = curr.next;
    }
    return head;
}
