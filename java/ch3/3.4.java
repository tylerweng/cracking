class MyQueue {

    private Stack<Integer> enqueueStack = new Stack<>();
    private Stack<Integer> dequeueStack = new Stack<>();
    private int front;

    public void push(int x) {
        if (enqueueStack.empty()) front = x;
        enqueueStack.push(x);
    }

    public int pop() {
        if (dequeueStack.empty()) {
            while (!enqueueStack.empty()) dequeueStack.push(enqueueStack.pop());
        }
        return dequeueStack.pop();
    }

    public int peek() {
        if (!dequeueStack.empty()) return dequeueStack.peek();
        return front;
    }

    public boolean empty() {
        return enqueueStack.empty() && dequeueStack.empty();
    }
}
