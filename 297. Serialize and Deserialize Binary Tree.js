/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  let result = "";

  let helper = (curr, str) => {
    if (curr === null) {
      str = str + "null,";
    } else {
      str = str + curr.val + ",";
      str = helper(curr.left, str);
      str = helper(curr.right, str);
    }
    return str;
  };
  result = helper(root, result);

  return result;
};

// Iterative version serialize
var serialize_ = function(root) {
  let result = "",
    stack = [],
    curr = root;

  while (curr !== null || stack.length > 0) {
    if (curr !== null) {
      result = result + curr.val + ",";
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.pop();
      result = result + "null,";
      curr = curr.right;
    }
  }

  return result + "null,";
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  let nodes = data.split(",");

  let helper = (nodeList, curr) => {
    curr = nodeList.shift();
    if (curr === "null") {
      curr = null;
    } else {
      curr = new TreeNode(Number(curr));

      curr.left = helper(nodeList, curr);
      curr.right = helper(nodeList, curr);
    }
    return curr;
  };

  let root = helper(nodes, null);

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  let s = "";
  let _preorder = node => {
    if (node === null) return null + ",";
    s = node.val + ",";
    s += _preorder(node.left);
    s += _preorder(node.right);
    return s;
  };
  let str = _preorder(root);
  return str.slice(0, -1);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  let _deserialize = data => {
    if (data.length === 0) return null;
    let val = data.shift();
    if (val === "null") return null;
    let root = new TreeNode(Number(val));
    root.left = _deserialize(data);
    root.right = _deserialize(data);
    return root;
  };
  return _deserialize(data.split(","));
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
