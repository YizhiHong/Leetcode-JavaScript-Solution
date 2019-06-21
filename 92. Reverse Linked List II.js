/**
 * Definition for singly-linked list.

 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var reverseBetween = function(head, m, n) {
  let ret = new ListNode(null);
  ret.next = head;
  let pre = ret;

  for (let i = 0; i < m - 1; i++) {
    pre = pre.next;
  }

  let start = pre.next;

  let next = start.next;
  for (let i = 0; i < n - m; i++) {
    start.next = next.next;
    next.next = pre.next;
    pre.next = next;
    next = start.next;
  }

  return ret.next;
};
