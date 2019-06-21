/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}

Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.
 
 */
var searchInsert = function(nums, target) {
  let mid,
    start = 0,
    end = nums.length - 1;

  while (start <= end) {
    mid = ~~((start + end) / 2);
    if (nums[mid] > target) {
      end = mid - 1;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      return mid;
    }
  }

  return start;
};
