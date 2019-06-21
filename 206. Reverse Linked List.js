/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/** iterative Solution **/

var reverseList = function(head) {
  let prev = null;
  let next = null;
  let curr = head;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

/** recursive Solution **/

/**
The recursive version is slightly trickier and the key is to work backwards. 
Assume that the rest of the list had already been reversed, now how do I reverse the front part? 
Let's assume the list is: n1 → … → nk-1 → nk → nk+1 → … → nm → Ø
Assume from node nk+1 to nm had been reversed and you are at node nk.
n1 → … → nk-1 → nk → nk+1 ← … ← nm
We want nk+1’s next node to point to nk.
So,

nk.next.next = nk;

Be very careful that n1's next must point to Ø. If you forget about this, your linked list has a cycle in it. 
This bug could be caught if you test your code with a linked list of size 2.
*/
var reverseList = function(head) {
  if (head === null || head.next === null) {
    return head;
  }
  let prev = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return prev;
};
