// implement the following operations of a stack using queues.
// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// empty() -- Return whether the stack is empty.

/**
 * one stacks
 */

class MyStack {
  constructor() {
    this.queue = [];
  }

  push(x) {
    let q = this.queue;
    q.unshift(x);
    for (let i = 0; i < q.length; i++) {
      q.unshift(q.shift());
    }
  }

  pop() {
    return this.queue.shift();
  }

  top() {
    return this.queue[0];
  }

  empty() {
    return this.queue.length === 0;
  }
}

/**
 * recusive: method
 */
class MyStack {
  constructor() {
    this.queue = [];
  }

  push(x) {
    this._push(x);
  }

  _push(x) {
    if (this.queue.length === 0) {
      this.queue.unshift(x);
      return;
    }
    let temp = this.queue.shift();
    this._push(temp);
    this.queue.unshift(x);
  }

  pop() {
    return this.queue.shift();
  }

  top() {
    return this.queue[0];
  }

  empty() {
    return this.queue.length === 0;
  }
}
