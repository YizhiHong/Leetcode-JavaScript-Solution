# /**
# ref:https://leetcode.com/articles/find-median-from-data-stream/
# follow up question:

# 1.If all integer numbers from the stream are between 0 and 100, how would you optimize it?
# 2.If 99% of all integer numbers from the stream are between 0 and 100, how would you optimize it?

# ans: Counting Sort - [1~100] array, addNumber will take O(1), keep a pointer to track the median index which is O(1) for find Median too.

# */

# solution 1: two heaps
# space: O(n),
# addNum: O(logn),
# findMedian: O(1)
#
from heapq import * 

class MedianFinder:

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.lo = [] # min-heap
        self.hi = [] # max-heap

    def addNum(self, num):
        """
        :type num: int
        :rtype: void
        """
        heappush(self.lo, num)
        heappush(self.hi, -heappop(self.lo)) # max-heap use nagative way
        if len(self.lo) < len(self.hi):
            heappush(self.lo, -heappop(self.hi)) # max-heap use nagative way
            
            
    def findMedian(self):
        """
        :rtype: float
        """
        if len(self.lo) > len(self.hi):
            return self.lo[0]
        else:
            return (self.lo[0] -(self.hi[0]))/2
        

# */
# solution 2: Balanced BST
# space: O(n),
# addNum: O(logn),
# findMedian: O(1)
#
