/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  let res = Number.MIN_SAFE_INTEGER; // or Number.NEGATIVE_INFINITY
  let _maxPathSum = curr => {
    if (curr === null) return 0;
    let left = Math.max(_maxPathSum(curr.left), 0);
    let right = Math.max(_maxPathSum(curr.right), 0);

    res = Math.max(res, left + right + curr.val);
    return curr.val + Math.max(left, right);
  };

  _maxPathSum(root);

  return res;
};
