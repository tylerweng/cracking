class Stack {
    Node top;
    Node pop() {
        if (top != null) {
            Object item = top.data;
            top = top.next;
            return item;
        }
    }
    void push(Object item) {
        Node t = new Node(item);
        t.next = top;
        top = t;
    }
}

class Queue {
    Node first, last;
    void enqueue(Object item) {
        if (!first) {
            last = new Node(item);
            first = last;
        } else {
            last.next = new Node(item);
            last = last.next;
        }
    }
    Node dequeue() {
        if (first != null) {
            Object item = first.data;
            first = first.next;
            return item;
        }
        return null;
    }
}

class MinStack {
    Stack<Integer> s;
    Integer minEle;

    // Constructor
    MinStack() { s = new Stack<Integer>(); }

    // Prints minimum element of MinStack
    void getMin() {
        if (s.isEmpty()) {
            System.out.println("Stack is empty");
        } else {
            System.out.println("minEle is: " + minEle);
        }
    }

    // Prints top element of MinStack
    void peek() {
        if (s.isEmpty()) {
            System.out.println("Stack is empty");
            return;
        }
        Integer t = s.peek();
        System.out.print("topEle is: ");
        // If t < minEle that means minEle stores value of t
        if (t < minEle) {
            System.out.println(minEle);
        } else {
            System.out.println(t);
        }
    }

    // Removes the top element from MinStack
    void pop() {
        if (s.isEmpty()) {
            System.out.println("Stack is empty");
            return;
        }
        System.out.print("Top Most Element Removed: ");
        Integer t = s.pop();
        // minEle must be updated as the curr minEle is being Removed
        if (t < minEle) {
            System.out.println(minEle);
            minEle = 2 * minEle - t;
        } else {
            System.out.println(t);
        }
    }

    // Insert new number into MinStack
    void push(Integer x) {
        if (s.isEmpty()) {
            minEle = x;
            s.push(x);
            System.out.println("Number Inserted: " + x);
            return;
        }
        // if new number is less than original minEle
        if (x < minEle) {
            s.push(2 * x - minEle);
            minEle = x;
        } else {
            s.push(x);
        }
        System.out.println("Number Inserted: " + x);
    }
}
