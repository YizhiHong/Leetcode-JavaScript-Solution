/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

// O(n) O(n)(stack)
var recoverTree = function(root) {
  let prev = null,
    temp = null,
    res = [];

  let inOrder = curr => {
    if (!curr) return;
    inOrder(curr.left);
    prev = temp;
    temp = curr;
    if (prev && prev.val > temp.val) {
      if (res.length === 0) {
        res.push(...[prev, temp]);
      } else {
        res[1] = temp;
      }
    }
    inOrder(curr.right);
  };

  inOrder(root);
  let temp = res[0].val;
  res[0].val = res[1].val;
  res[1].val = temp;
};

// O(n) O(1) ref:https://www.youtube.com/watch?v=QZMropFflv4
// Morris traversal:https://www.youtube.com/watch?v=wGXB9OWhPTg
var recoverTree = function(root) {
  let prev = null,
    curr = root,
    rev = [];

  const swap = (a, b) => {
    let t = a.val;
    a.val = b.val;
    b.val = t;
  };

  const findSwapped = node => {
    if (prev && prev.val > node.val) {
      rev.length === 0 ? rev.push(...[prev, node]) : (rev[1] = node);
    }
    prev = node;
  };

  // inorder morris traversal
  while (curr !== null) {
    if (curr.left !== null) {
      let temp = curr.left;
      // looking for the right most node of the left subtree
      while (temp.right !== null && temp.right !== curr) {
        temp = temp.right;
      }
      // first visit, connect a bridge
      if (temp.right === null) {
        temp.right = curr;
        curr = curr.left;
      } else {
        // visit value
        temp.right = null;
        findSwapped(curr);
        curr = curr.right;
      }
    } else {
      // visit value
      findSwapped(curr);
      curr = curr.right;
    }
  }
  swap(rev[0], rev[1]);
};
