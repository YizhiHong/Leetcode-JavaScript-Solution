/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if (root === null) return []
    let res = [],
        stack = [],
        curr = root
        
    while(stack.length > 0 || curr !== null){
        while(curr !== null){
            res.push(curr.val)
            stack.push(curr)
            curr = curr.left
        }
        curr = stack.pop()
        curr = curr.right
    }
    
    return res
};