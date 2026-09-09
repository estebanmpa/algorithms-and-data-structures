/*
Design a stack class that supports the push, pop, top, and getMin operations.

    MinStack() initializes the stack object.
    void push(int val) pushes the element val onto the stack.
    void pop() removes the element on the top of the stack.
    int top() gets the top element of the stack.
    int getMin() retrieves the minimum element in the stack.

Each function should run in O(1)O(1) time.
*/
class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
        this.pointer = -1

    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.pointer++
        this.stack[this.pointer] = val
        const currentMin = this.pointer === 0 ? val : Math.min(val, this.minStack[this.pointer - 1])
        this.minStack[this.pointer] = currentMin
    }

    /**
     * @return {void}
     */
    pop() {
        this.pointer--
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.pointer]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.pointer]
    }
}


const minStack = new MinStack();
minStack.push(1);
minStack.push(2);
minStack.push(0);
minStack.getMin(); // return 0
minStack.pop();
minStack.top();    // return 2
minStack.getMin(); // return 1