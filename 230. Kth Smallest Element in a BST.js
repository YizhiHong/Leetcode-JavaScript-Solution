/**
    Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

    Note: 
    You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

    Example 1:

    Input: root = [3,1,4,null,2], k = 1
       3
      / \
     1   4
      \
       2
    Output: 1
    Example 2:

    Input: root = [5,3,6,2,4,null,null,1], k = 3
           5
          / \
         3   6
        / \
       2   4
      /
     1
    Output: 3
    Follow up:
    What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    if(root === null) return null
    let stack = [], curr = root
    
    while(curr!== null || stack.length !== 0){
        while(curr !== null){
            stack.push(curr)
            curr = curr.left
        }
        curr = stack.pop()
        if(--k === 0) return curr.val
        curr = curr.right
    }
    return null
};

/** **** follow up: What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? 
How would you optimize the kthSmallest routine?

optimized: construct a array to store result.
*/

var kthSmallest = function(root, k) {
    if(root === null) return null
    
    let result = []
    let curr = root
    
    const constructResult = (node,ret) => {
        if(node === null) return null
        constructResult(node.left,ret)
        ret.push(node.val)
        constructResult(node.right,ret)
        
    }
    
    constructResult(curr,result)
    
    return result[k-1]
};