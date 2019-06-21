/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
Two pointers check cycle
 */
var hasCycle = function(head) {
  let [fast, slow] = [head, head];
  do {
    if (fast === null || fast.next === null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  } while (fast !== slow);
  return true;
};
