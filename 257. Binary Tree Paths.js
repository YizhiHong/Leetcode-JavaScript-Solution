/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (root === null) return [];
  let paths = [];

  let getPath = (curr, path) => {
    if (curr === null) return;
    if (curr.left === null && curr.right === null) {
      paths.push(path + curr.val);
    } else {
      let currVal = path + curr.val + "->";
      getPath(curr.left, currVal);
      getPath(curr.right, currVal);
    }
  };
  getPath(root, "");

  return paths;
};

var binaryTreePaths = function(root) {
  var result = [];
  function navigate(node, path = "") {
    if (!node) {
      return [];
    }

    navigate(node.left, path + node.val + "->");

    navigate(node.right, path + node.val + "->");

    if (!node.left && !node.right) {
      result.push(path + node.val);
    }
  }
  navigate(root, []);
  return result;
};
