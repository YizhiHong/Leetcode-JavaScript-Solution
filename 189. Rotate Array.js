/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**method 1 slowest
O(n) 
O(1)
**/
var rotate = function(nums, k) {
  while (k > 0) {
    k--;
    nums.unshift(nums.pop());
  }
};

/**method 2 replace and concat
O(n) 
O(n)
**/
var rotate = function(nums, k) {
  let len = nums.length;
  nums.splice(0, 0, ...nums.slice(len - k));
  nums.splice(len);
};

var rotate = function(nums, k) {
  let last = nums.slice(nums.length - k);
  nums.splice(nums.length - k, k);
  nums.unshift(...last);
};

/**method 3 reverse 
O(n) 
O(1)
**/
var rotate = function(nums, k) {
  let reverse = (start, end) => {
    while (start < end) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  };
  if (k > nums.length) k %= nums.length;
  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
};
