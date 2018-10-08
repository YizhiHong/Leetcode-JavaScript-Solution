/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

 // O(n) O(n)(stack)
var recoverTree = function(root) {
    
    let prev = null,
        cur = null,
        res = []
    
    let inOrder = (curr) => {
        if(!curr) return;
        inOrder(curr.left)
        prev = cur
        cur = curr
        if (prev && prev.val > cur.val){
            if(res.length === 0){
                res.push(...[prev,cur])
            }else{
                res[1] = cur
            }
        }        
        inOrder(curr.right)
    }
    
    inOrder(root)
    let temp = res[0].val
    res[0].val = res[1].val
    res[1].val = temp   
};

// O(n) O(1) Morris traversal



