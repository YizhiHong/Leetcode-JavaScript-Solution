/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
    You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

    You may assume the two numbers do not contain any leading zero, except the number 0 itself.

    Example:

    Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
    Output: 7 -> 0 -> 8
    Explanation: 342 + 465 = 807.
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let a = 0,
    b = 0,
    carry = 0,
    total = 0
  let head = new ListNode(0),
    curr = head

  while (l1 !== null || l2 !== null) {
    a = l1 ? l1.val : 0
    b = l2 ? l2.val : 0

    total = carry + a + b
    carry = total > 9 ? 1 : 0

    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null

    curr.next = new ListNode(total % 10)
    curr = curr.next

  }
  if (carry > 0) curr.next = new ListNode(carry)

  return head.next
};