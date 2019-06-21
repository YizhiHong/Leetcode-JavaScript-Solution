/**
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

The array may contain duplicates.
 **/

var findMin = function(nums) {
  if (nums.length === 1) return nums[0];
  let lo = 0,
    hi = nums.length - 1,
    mid;

  while (lo < hi) {
    mid = (lo + hi) >> 1;
    if (nums[hi] > nums[mid]) {
      hi = mid;
    } else if (nums[hi] < nums[mid]) {
      lo = mid + 1;
    } else {
      hi--;
    }
  }
  return nums[lo];
};
