/**
23. Merge k Sorted Lists
Hard

1990

125

Favorite

Share
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// Merge List O(nlogk) O(1)
var mergeKLists = function(lists) {
  const _mergeList = (lo, hi) => {
    if (lists.length === 0) return null;
    if (lo === hi) return lists[lo];
    let mid = ~~((hi + lo) / 2);
    let left = _mergeList(lo, mid);
    let right = _mergeList(mid + 1, hi);
    return _merge(left, right);
  };

  const _merge = (list1, list2) => {
    if (!list1 || !list2) return list1 || list2;
    if (list1.val > list2.val) {
      list2.next = _merge(list2.next, list1);
      return list2;
    } else {
      list1.next = _merge(list1.next, list2);
      return list1;
    }
  };

  return _mergeList(0, lists.length - 1);
};

// O(nlogn) O(n)
var mergeKLists = function(lists) {
  let sortList = [];
  for (let l of lists) {
    while (l) {
      sortList.push(l.val);
      l = l.next;
    }
  }
  sortList.sort((a, b) => a - b);

  let head = new ListNode(null),
    node = head;

  for (let val of sortList) {
    node.next = new ListNode(val);
    node = node.next;
  }
  return head.next;
};
