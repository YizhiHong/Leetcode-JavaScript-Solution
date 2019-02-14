
# Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
# Example:
# Input:
# [
#   1->4->5,
#   1->3->4,
#   2->6
# ]
# Output: 1->1->2->3->4->4->5->6

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

# space: O(nlogk) space: O(k)

from queue import PriorityQueue as PQ

class Solution:
    
    def mergeKLists(self, lists: 'List[ListNode]') -> 'ListNode':
        head = point =  ListNode(0)
        count = 0
        pq = PQ() # init a priority queue
        for l in lists:
            if l:
                pq.put((l.val,count,l)) # push first value in to heap
                count += 1
        
        while not pq.empty():
            val, _ ,node = pq.get()
            point.next = ListNode(val)
            point = point.next
            node = node.next
            if node:
                pq.put((node.val,_,node))
        
        return head.next