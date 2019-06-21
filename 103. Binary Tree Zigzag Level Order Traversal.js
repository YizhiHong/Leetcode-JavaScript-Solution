/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).
 */
var zigzagLevelOrder = function(root) {
  if (root === null) return [];

  let result = [],
    queue = [],
    curr = root,
    level = 1;

  queue.push(curr);

  while (queue.length > 0) {
    let len = queue.length;
    let row = [];

    while (len > 0) {
      curr = queue[0];
      if (curr.left !== null) {
        queue.push(curr.left);
      }
      if (curr.right !== null) {
        queue.push(curr.right);
      }
      queue.shift();
      level % 2 === 0 ? row.unshift(curr.val) : row.push(curr.val);
      len--;
    }
    level++;
    result.push(row);
  }

  return result;
};
