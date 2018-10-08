/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isSymmetric = function(root) {
    if (root === null) {return true}
    
    var symmetric = function(left, right){
        if(left === null && right === null){
           return true
        }
        if(left !==null && right !==null && left.val === right.val){
            return symmetric(left.left,right.right) && symmetric(left.right,right.left)
        }
        return false
    }
    
    return symmetric(root.left, root.right)
};

