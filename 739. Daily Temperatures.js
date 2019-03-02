/**
Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].


*/

//O(n) O(n)
//stack
var dailyTemperatures = function(T) {
    let stack = []
    let res = new Uint16Array(T.length).fill(0)
    
    for(let i = 0; i < T.length; i++){
        while(stack.length >=0 && T[i] > T[stack[stack.length-1]]){
            let idx = stack.pop(i)
            res[idx] = i - idx
        }
        stack.push(i)
    }
    return res
};

//array 
var dailyTemperatures = function(T) {
    let stack = new Uint16Array(T.length)
    let res = new Uint16Array(T.length)
    let top = -1
    
    for(let i = 0; i < T.length; i++){
        while( top >= 0 && T[i] > T[stack[top]]){
            let idx = stack[top--]
            res[idx] = i - idx
        }
        stack[++top] = i
    }
    return res
};