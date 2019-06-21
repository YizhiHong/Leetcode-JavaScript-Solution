/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if (n === 0) return [];
  let _generateTree = (start, end) => {
    let tree = [];
    for (let i = start; i < end + 1; i++) {
      let left = _generateTree(start, i - 1);
      let right = _generateTree(i + 1, end);
      for (let j of left) {
        for (let k of right) {
          let root = new TreeNode(i);
          root.left = j;
          root.right = k;
          tree.push(root);
        }
      }
    }

    return tree.length === 0 ? [null] : tree;
  };

  return _generateTree(1, n);
};
