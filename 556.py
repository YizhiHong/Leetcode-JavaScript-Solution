from itertools import chain


class Solution:
    def matrixReshape(self, nums, r, c):
        """
        :type nums: List[List[int]]
        :type r: int
        :type c: int
        :rtype: List[List[int]]
        """
        if r * c == len(nums) * len(nums[0]):
            return list(zip(*[chain.from_iterable(nums)] * c))
        else:
            return nums
