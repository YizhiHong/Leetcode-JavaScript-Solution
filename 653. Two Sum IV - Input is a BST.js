/**
Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.

Example 1:

Input: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 9

Output: True
 

Example 2:

Input: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 28

Output: False
*/

//O(n) O(n) Recusive
var findTarget = function(root, k) {
  let map = new Set(),
    flag = false;

  const inorder = curr => {
    if (!curr) return;
    inorder(curr.left);
    if (map.has(curr.val)) {
      flag = true;
    } else {
      map.add(k - curr.val);
    }
    inorder(curr.right);
  };
  inorder(root);
  return flag ? true : false;
};

//O(n) O(n) morris
var findTarget = function(root, k) {
  let curr = root;

  const hasComplement = (node, val, head) => {
    let map = new Set();
    while (head) {
      // console.log(head.val)
      map.add(head.val);
      if (head.val === val && node !== head) {
        return true;
      } else if (head.val < val) {
        head = head.right;
      } else {
        head = head.left;
      }
      if (head && map.has(head.val)) return false;
    }
    return false;
  };

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
        if (hasComplement(curr, k - curr.val, root)) return true;
        curr = curr.right;
      }
    } else {
      // visit value
      if (hasComplement(curr, k - curr.val, root)) return true;
      curr = curr.right;
    }
  }
  return false;
};
