/**
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

Example:

Given this linked list: 1->2->3->4->5

For k = 2, you should return: 2->1->4->3->5

For k = 3, you should return: 3->2->1->4->5

Note:

Only constant extra memory is allowed.
You may not alter the values in the list's nodes, only nodes itself may be changed.

*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

/** O(n) O(1)*/
var reverseKGroup = function(head, k) {
  let root = new ListNode(null);
  root.next = head;

  let prev = root,
    curr = prev.next,
    tester = curr,
    next,
    count = 0;

  while (true) {
    while (count < k && tester !== null) {
      tester = tester.next;
      count++;
    }
    if (count < k) {
      return root.next;
    } else {
      next = curr.next;

      for (let i = 0; i < k - 1; i++) {
        curr.next = next.next;
        next.next = prev.next;
        prev.next = next;
        next = curr.next;
      }
      prev = curr;
      curr = next;
    }
    count = 0;
  }
  return root.next;
};

// solution 2: stack - O(n) O(k)
var reverseKGroup = function(head, k) {
  let root = new ListNode(null);
  root.next = head;

  let stack = [],
    curr = root.next,
    prev = root,
    temp;

  while (true) {
    // push the k group node in stack
    for (let i = 0; i < k && curr !== null; i++) {
      stack.push(curr);
      curr = curr.next;
    }

    if (stack.length < k) return root.next; // return if the number of last group less than k

    temp = curr; // store the next point prevent connetion lost
    curr = stack.pop(); // pop last node
    prev.next = curr; // connect the prev node to the last node

    //pop until empty
    while (stack.length !== 0) {
      let p = stack.pop();
      curr.next = p;
      curr = p;
    }

    curr.next = temp; // connect to next point that we stored previously
    // move to next iteration
    prev = curr;
    curr = temp;
  }
};
