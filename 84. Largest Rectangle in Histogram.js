/**
Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.
Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].
The largest rectangle is shown in the shaded area, which has area = 10 unit.

Example:

Input: [2,1,5,6,2,3]
Output: 10
 */


// O(n) O(n) 
var largestRectangleArea = function(heights) {
    Array.prototype.peek = function() {return this[this.length-1]}
    const getArea = (width,height) => width*height
    
    let stack = [],
        len = heights.length,
        maxArea = 0
    
    for(let i = 0; i <= len; i++){
        let hi = heights[i] || 0
        while(stack.length > 0 &&  hi <= heights[stack.peek()]){
            let h = heights[stack.pop()]
            let idx = stack.length > 0 ?  stack.peek() : -1
            maxArea = Math.max(maxArea, getArea(h, i - idx - 1))
        }
        stack.push(i)
    }
    
    return maxArea
    
};