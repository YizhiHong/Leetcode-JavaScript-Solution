/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

/* my solution: left shift */

var deleteNode = function(node) {
  let curr = node;
  let next = curr.next;

  while (true) {
    curr.val = next.val;
    if (next.next === null) {
      curr.next = null;
      break;
    }
    curr = next;
    next = next.next;
  }
};

/* best */
var deleteNode = function(head) {
  head.val = head.next.val;
  head.next = head.next.next;
};
