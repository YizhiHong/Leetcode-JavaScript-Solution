// Implement the following operations of a queue using stacks.

// push(x) -- Push element x to the back of queue.
// pop() -- Removes the element from in front of queue.
// peek() -- Get the front element.
// empty() -- Return whether the queue is empty.
// Example:

// MyQueue queue = new MyQueue();

// queue.push(1);
// queue.push(2);  
// queue.peek();  // returns 1
// queue.pop();   // returns 1
// queue.empty(); // returns false
// Notes:

// You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
// You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).

// use two stack
class MyQueue{
    constructor(){
        this.stack1 = []
        this.stack2 = []
        this.front = null
    }
    
    //O(1) O(n)
    push(x){
        if(this.stack1.length === 0) this.front = x
        this.stack1.push(x)
    }

    //O(1) worst O(n)
    pop(){
        if(this.stack2.length === 0){
            while (this.stack1.length > 0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }

    //O(1)
    peek(){
        if(this.stack2.length > 0) return this.stack2[this.stack2.length-1]
        return this.front
    }
    
    //O(1)
    empty(){
        return this.stack1.length === 0 && this.stack2.length === 0
    }
};

// use recursive stack
class MyQueue{
    constructor(){
        this.stack = []
    }
    
    push(x){
        this._push(x)
    }
    _push(x){
        if(this.stack.length === 0){
            this.stack.push(x)
            return;
        }
        let temp = this.stack.pop()
        this._push(x)
        this.stack.push(temp)
        
    }
    
    pop(){
        return this.stack.pop()
    }
    
    peek(){
        return this.stack[this.stack.length - 1]
    }
    
    empty(){
        return this.stack.length === 0
    }
};