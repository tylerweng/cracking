public Node sumLinkedList(Node n1, Node n2) {
    Node sentinel = new Node(0);
    Node n3 = sentinel;
    int carry = 0;
    while (n1 != null || n2 != null) {
        int d1 = (n1 == null ? 0 : n1.data);
        int d2 = (n2 == null ? 0 : n2.data);
        int sum = d1 + d2 + carry;
        n3.next = new Node(sum % 10);
        n3 = n3.next;
        carry = (sum >= 10 ? 1 : 0);
        if (n1 != null) n1 = n1.next;
        if (n2 != null) n2 = n2.next;
    }
    if (carry != 0) n3.next = new Node(carry);
    return sentinel.next;
}
