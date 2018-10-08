/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

/** recursive */
var buildTree = function(preorder, inorder) {
    let root = null
    if (inorder.length > 0) {
        let index = inorder.indexOf(preorder.shift())
        root = new TreeNode(inorder[index])
        root.left = buildTree(preorder,inorder.slice(0,index))
        root.right = buildTree(preorder,inorder.slice(index+1,inorder.length))
    }
    return root
};

/** Iterative */