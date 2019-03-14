// method 1: current min
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
    this.min = Number.MAX_VALUE
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (x < this.min) {
        this.min = x
    }
    this.stack.push({
        val: x,
        currMin: this.min
    })

    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
    if(this.stack.length === 0) {
        this.min = Number.MAX_VALUE
    }else{
        this.min = this.stack[this.stack.length-1].currMin
    }
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1].val
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

 /**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
    this.mins = []
};

// method 2: two stack
/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
    if(x <= this.getMin() || this.mins.length === 0){
        this.mins.push(x)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let temp = this.stack.pop()
    if(temp === this.mins[this.mins.length -1]){
        this.mins.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.mins[this.mins.length - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */