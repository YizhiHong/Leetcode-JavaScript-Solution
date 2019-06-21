/**
 * 
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary search tree can be serialized to a string and this string can be deserialized to the original tree structure.

The encoded string should be as compact as possible.

Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
let _preorder = (node, s) => {
  if (node === null) return "";
  s = node.val + ','
  s += _preorder(node.left)
  s += _preorder(node.right)
  return s
}

let _deserialize = (lo, hi, nums) => {
  if (nums.length === 0) return null
  let val = Number(nums[0])
  if (val < lo || val > hi) return null;

  nums.shift()
  let root = new TreeNode(val)
  root.left = _deserialize(lo, val, nums)
  root.right = _deserialize(val, hi, nums)
  return root
}
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let s = _preorder(root, "")
  return s.slice(0, -1)
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data === "") return null
  nums = data.split(",")
  return _deserialize(-Infinity, Infinity, nums)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */