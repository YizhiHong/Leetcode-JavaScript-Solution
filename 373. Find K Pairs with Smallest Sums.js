/**
You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k.

Define a pair (u,v) which consists of one element from the first array and one element from the second array.

Find the k pairs (u1,v1),(u2,v2) ...(uk,vk) with the smallest sums.

Example 1:

Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
Output: [[1,2],[1,4],[1,6]] 
Explanation: The first 3 pairs are returned from the sequence: 
             [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
**/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */

// O(k*k) O(klog(k)) if it's priority quque,  O(k)
var kSmallestPairs = function(nums1, nums2, k) {
  if (k === 0 || nums1.length === 0 || nums2.length === 0) return [];

  const queue = [],
    res = [];

  _queuePush(0, 0); // push the index

  while (queue.length > 0 && res.length < k) {
    let [_, i, j] = _queuePop(); // pop from pq
    res.push([nums1[i], nums2[j]]);

    _queuePush(i, j + 1);

    if (j === 0) {
      _queuePush(i + 1, 0);
    }
  }

  function _queuePush(i, j) {
    if (i < nums1.length && j < nums2.length) {
      let totol = nums1[i] + nums2[j];
      for (let q = 0; q < queue.length; q++) {
        if (totol < queue[q][0]) {
          queue.splice(q, 0, [totol, i, j]);
          return;
        }
      }
      queue.push([totol, i, j]);
    }
  }
  function _queuePop() {
    return queue.shift();
  }

  return res;
};
