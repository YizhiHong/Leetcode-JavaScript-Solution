# heap v1
import heapq


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        hashTable = {}
        for num in nums:
            if num in hashTable:
                hashTable[num] += 1
            else:
                hashTable[num] = 1
        pq = []
        for key, value in hashTable.items():
            heapq.heappush(pq, (-value, key))

        res = []
        while k > 0:
            res.append(heapq.heappop(pq)[1])
            k -= 1
        return res

# v2


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:

        hashTable = {}
        for num in nums:
            if num in hashTable:
                hashTable[num] += 1
            else:
                hashTable[num] = 1

        pq = []
        for key, value in hashTable.items():
            heapq.heappush(pq, (value, key))
            if len(pq) > k:
                heapq.heappop(pq)
        res = []
        while pq:
            res.append(heapq.heappop(pq)[1])

        return res


# heap use build-in function
class Solution:
    def topKFrequent(self, nums: 'List[int]', k: 'int') -> 'List[int]':
        count = collections.Counter(nums)
        return heapq.nlargest(k, count.keys(), key=count.get)
