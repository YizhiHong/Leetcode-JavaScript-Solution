/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
Method 1: redirection
O(m+n)
O(1)
 */
var getIntersectionNode = function(headA, headB) {
  let [a, b] = [headA, headB];

  while (a !== null || b !== null) {
    if (a === b) return a;
    a = a === null ? headB : a.next;
    b = b === null ? headA : b.next;
  }

  return null;
};

/**
Method 2: The Difference
O(m+n)
O(1)
 */
var getIntersectionNode = function(headA, headB) {
  if (headA === null || headB === null) return null;
  //     get length
  let aLen = getLen(headA);
  let bLen = getLen(headB);

  let diff = aLen > bLen ? aLen - bLen : bLen - aLen;
  let longer = aLen > bLen ? headA : headB;
  let shorter = aLen > bLen ? headB : headA;
  //     move forth difference of longer list
  while (diff > 0) {
    longer = longer.next;
    diff--;
  }
  //     get intersection
  while (longer !== shorter) {
    longer = longer.next;
    shorter = shorter.next;
  }

  return longer;
};

var getLen = function(head) {
  let curr = head;
  let len = 0;
  while (curr !== null) {
    len++;
    curr = curr.next;
  }
  return len;
};
