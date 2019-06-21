/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

/** O(n) O(n)*/
var isPalindrome = function(head) {
  if (!head) return true;

  let curr = head;
  let prev = null;

  while (curr) {
    curr.prev = prev;
    prev = curr;
    curr = curr.next;
  }

  let left = head;
  let right = prev;

  while (left.next && right.prev) {
    if (left.val !== right.val) return false;
    left = left.next;
    right = right.prev;
  }

  return true;
};

/** O(n) O(1)*/
var isPalindrome = function(head) {
  if (head === null) return true;

  let slow = head;
  let fast = slow.next;

  // Find the mid node
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // Reverse Second half
  let prev = null;
  let curr = slow;
  let next = null;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  console.log(prev);

  // loop for same values
  let first = head;

  while (prev && first) {
    if (prev.val === first.val) {
      prev = prev.next;
      first = first.next;
    } else {
      return false;
    }
  }
  return true;
};

/** recursive */
var isPalindrome = function(head) {
  if (!head) {
    return true;
  }
  return checkPalindrome(head);
  function checkPalindrome(node1) {
    if (!node1) {
      return true;
    }

    let node2 = checkPalindrome(node1.next);
    if (node1.val === head.val) {
      head = head.next;
      return node2;
    } else {
      return false;
    }
  }
};
