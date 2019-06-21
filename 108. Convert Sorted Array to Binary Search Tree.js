/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) return null;

  let s = 0;
  let e = nums.length - 1;

  let bst = function(nums, start, end) {
    if (start > end) {
      return null;
    }
    let mid = ~~((end + start) / 2);

    let root = new TreeNode(nums[mid]);
    root.left = bst(nums, start, mid - 1);
    root.right = bst(nums, mid + 1, end);

    return root;
  };

  let root = bst(nums, s, e);

  return root;
};
