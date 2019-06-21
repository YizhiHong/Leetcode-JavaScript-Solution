/***
 * Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

Example 1:

Input: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7                  
Output: 
Merged tree:
	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7
 

Note: The merging process must start from the root nodes of both trees.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

// recursive O(n) O(n)
var mergeTrees = function (t1, t2) {
  if (t1 === null) return t2;
  if (t2 === null) return t1;
  t1.val += t2.val;
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);
  return t1;
};
// Iterative O(n) O(n)
var mergeTrees = function (t1, t2) {
  if (t1 === null) return t2;
  if (t2 === null) return t1;

  let stack = [];

  stack.push([t1, t2]);

  while (stack.length > 0) {
    let [r1, r2] = stack.pop();

    if (r1 === null || r2 === null) continue;

    r1.val = r1.val + r2.val;

    if (r1.left === null) {
      r1.left = r2.left;
    } else {
      stack.push([r1.left, r2.left]);
    }

    if (r1.right === null) {
      r1.right = r2.right;
    } else {
      stack.push([r1.right, r2.right]);
    }
  }
  return t1;
};