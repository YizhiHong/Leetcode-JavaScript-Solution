# You have k lists of sorted integers in ascending order. Find the smallest range that includes at least one number from each of the k lists.

# We define the range [a,b] is smaller than range [c,d] if b-a < d-c or a < c if b-a == d-c.

# Example 1:
# Input:[[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]
# Output: [20,24]
# Explanation:
# List 1: [4, 10, 15, 24,26], 24 is in range [20,24].
# List 2: [0, 9, 12, 20], 20 is in range [20,24].
# List 3: [5, 18, 22, 30], 22 is in range [20,24].
# Note:
# The given list may contain duplicates, so ascending order means >= here.
# 1 <= k <= 3500
# -105 <= value of elements <= 105.
# For Java users, please note that the input type has been changed to List<List<Integer>>. And after you reset the code template, you'll see this point.

from queue import PriorityQueue as PQ


class Solution:
    def smallestRange(self, nums: 'List[List[int]]') -> 'List[int]':
        min_pq = PQ()
        k_index = [0] * len(nums)
        right = -10**5
        res = (-10**5, 10**5)

        for i, j in enumerate(k_index):
            min_pq.put((nums[i][j], i, j))
            right = max(right, nums[i][j])

        while min_pq:
            left, k, i = min_pq.get()
            if right - left < res[1] - res[0]:
                res = (left, right)

            if i + 1 == len(nums[k]):
                return res

            temp = nums[k][i+1]
            right = max(temp, right)
            min_pq.put((temp, k, i+1))

# solution
