/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// bfs
var levelOrderBottom = function(root) {
  if (!root) return [];
  let res = [],
    queue = [],
    curr = root;

  queue.push(curr);

  while (queue.length > 0) {
    let row = [];
    let len = queue.length;

    while (len > 0) {
      curr = queue[0];
      if (curr.left !== null) {
        queue.push(curr.left);
      }
      if (curr.right !== null) {
        queue.push(curr.right);
      }
      queue.shift();
      row.push(curr.val);
      len--;
    }
    res.unshift(row);
  }
  return res;
};

// dfs
var levelOrderBottom = function(root) {
  if (root === null) return [];
  let res = [];

  let dfs = (arr, curr, level) => {
    if (curr === null) return;
    if (arr.length <= level) arr.unshift(new Array(0));
    dfs(arr, curr.left, level + 1);
    dfs(arr, curr.right, level + 1);
    arr[arr.length - level - 1].push(curr.val);
  };

  dfs(res, root, 0);
  return res;
};
