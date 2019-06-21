/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
	Recusive way: since we need to make sure the junction will be the head. we need to keep next before the swap
 */
var swapPairs = function(head) {
  if (head === null || head.next === null) return head;
  let next = head.next;
  head.next = swapPairs(next.next);
  next.next = head;
  return next;
};

/**
	Iterative way
 */
var swapPairs = function(head) {
  if (head === null || head.next === null) return head;
  let curr = head,
    next = null,
    prev = null,
    start = curr.next;

  while (curr !== null && curr.next !== null) {
    next = curr.next;
    if (prev !== null) prev.next = next;
    curr.next = next.next;
    next.next = curr;
    prev = curr;
    curr = curr.next;
  }
  return start;
};
