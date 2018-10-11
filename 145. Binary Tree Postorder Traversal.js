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

var postorderTraversal = function(root) {
    const res = []
    
    const pot = (curr,res) => {
        if(curr === null) return;
        pot(curr.left,res)
        pot(curr.right,res)
        res.push(curr.val)
    }
    pot(root,res)
    
    return res
};

//O(n), O(n)
var postorderTraversal = function(root) {
    if (root === null) return []
    let res = [],
        stack = [],
        curr;
    
    stack.push(root)
    
    while(stack.length > 0){
        curr = stack.pop()
        if(curr.left !== null){
            stack.push(curr.left)
        }
        
        if(curr.right !== null){
            stack.push(curr.right)
        }
        res.unshift(curr.val)
        
    }
    
    return res
};