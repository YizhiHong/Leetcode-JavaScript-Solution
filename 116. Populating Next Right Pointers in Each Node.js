/**
Note:

    You may only use constant extra space.
    Recursive approach is fine, implicit stack space does not count as extra space for this problem.
    You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children).

Example:

Given the following perfect binary tree,

     1
   /  \
  2    3
 / \  / \
4  5  6  7

After calling your function, the tree should look like:

     1 -> NULL
   /  \
  2 -> 3 -> NULL
 / \  / \
4->5->6->7 -> NULL
*/

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
  if (root === null) return;

  let queue = [],
    curr = root;

  queue.push(curr);

  while (queue.length > 0) {
    let len = queue.length;
    let nextNode = null;
    while (len > 0) {
      curr = queue[0];
      len > 1 ? (nextNode = queue[1]) : (nextNode = null);
      if (curr.left !== null) {
        queue.push(curr.left);
      }
      if (curr.right !== null) {
        queue.push(curr.right);
      }
      curr.next = nextNode;
      queue.shift();

      len--;
    }
  }
};

function TreeLinkNode(val) {
  this.val = val;
  this.left = this.right = this.next = null;
}

/**best **/
var connect = function(root) {
  if (root === null) return;
  let previous = root;
  let current;
  while (previous.left !== null) {
    current = previous;
    while (current !== null) {
      current.left.next = current.right;
      if (current.next !== null) {
        current.right.next = current.next.left;
      }
      current = current.next;
    }
    previous = previous.left;
  }
};
