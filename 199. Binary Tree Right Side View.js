/** 
 * Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
*/

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

var rightSideView = function(root) {
    if (root === null) return []
    let res = []
    let _depthSearch = (curr, level) => {
        if(curr === null) return null
        if(level === res.length){
            res.push(curr.val)
        }
        _depthSearch(curr.right, level + 1)
        _depthSearch(curr.left, level + 1)
        
    }
    _depthSearch(root, 0)
    return res
};