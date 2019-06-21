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

/** Inorder Search BST is ascending order 
    So we need to make sure curr value > prev value
 */
var isValidBST = function(root) {
  if (root === null) return true;
  let cur = root;
  let stack = [];

  let prev = null;

  while (cur !== null || stack.length > 0) {
    while (cur !== null) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    if (prev !== null && cur.val <= prev.val) return false;
    prev = cur;
    cur = cur.right;
  }

  return true;
};

/** recursive */
var isValidBST = function(root) {
  var arr = [];
  function inorder(root) {
    if (!root) return arr;
    inorder(root.left);
    arr.push(root.val);
    inorder(root.right);
  }
  inorder(root);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) return false;
  }
  return true;
};
