/**
 * Definition for a binary tree node.

 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


/** Recursive */
var inorderTraversal = function(root) {
    let number = []
    if (root === null) { return number }
    var inorder = function (node) {
        if (node.left !== null){
            inorder(node.left)
        }
        number.push(node.val)
        if (node.right !== null){
            inorder(node.right)
        }
    }
    inorder(root)
    return number
};

/** Iterative */

var inorderTraversal = function(root) {
    if (root === null) { return [] }
    
    let stack = []
    let ret = []
    let curr = root
    
    while(curr !== null || stack.length > 0 ){
        while( curr !== null){
            stack.push(curr)
            curr = curr.left
        }
        curr = stack.pop()
        ret.push(curr.val)
        curr = curr.right
    }
    
    return ret

};