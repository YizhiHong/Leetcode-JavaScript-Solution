/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 /** Recursive **/
var maxDepth = function(root) {
    if(root === null) return 0

    let left = 1
    let right = 1 
    
    left += maxDepth(root.left)
    right += maxDepth(root.right)
    
    return Math.max(left,right)
};

 /** iterative **/
var maxDepth = function(root) {
    if(root === null) return 0
    
    let level = 1;
    let curr = root;
    let queue = []
    queue.unshift([curr,1])
    
    while(queue.length > 0){
        [curr,level] = queue.pop()
        if(curr.left !== null) {
            queue.unshift([curr.left,level +1])
        }
        if(curr.right !== null) {
            queue.unshift([curr.right,level +1])
        }
        
    }
    return level
};