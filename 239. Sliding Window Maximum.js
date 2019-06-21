/**
Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.

Example:

Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
Output: [3,3,5,5,6,7] 
Explanation: 

Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Note: 
You may assume k is always valid, 1 ≤ k ≤ input array's size for non-empty array.

Follow up:
Could you solve it in linear time?
*/

/* O(n) */

var maxSlidingWindow = function(nums, k) {
  if (nums.length === 0) return [];
  // sort the first window and apply to result
  let queue = [],
    res = [];

  for (let i = 0; i < nums.length; i++) {
    // remove index below the window
    while (queue.length !== 0 && queue[queue.length - 1] < i - k + 1) {
      queue.pop();
    }
    while (queue.length !== 0 && nums[queue[0]] < nums[i]) {
      queue.shift();
    }

    queue.unshift(i);

    if (i >= k - 1) {
      res.push(nums[queue[queue.length - 1]]);
    }
  }

  return res;
};
// O(n)

var maxSlidingWindow = function(nums, k) {
  if (nums.length === 0) return [];
  // sort the first window and apply to result
  let queue = [],
    res = [];

  for (let i = 0; i < nums.length; i++) {
    let firstIdx = i - k + 1;
    // remove index below the window
    while (queue.length && queue[queue.length - 1] < nums[i]) {
      queue.pop();
    }
    queue.push(nums[i]);
    if (firstIdx < 0) continue;
    res.push(queue[0]);
    if (queue.length && nums[firstIdx] === queue[0]) queue.shift();
  }

  return res;
};
