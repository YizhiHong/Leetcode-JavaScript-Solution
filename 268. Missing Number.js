/**
 * @param {number[]} nums
 * @return {number}
 */

/** My method XOR: O(n) O(1) */
var missingNumber = function(nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res = res ^ i ^ nums[i];
  }
  return res ^ nums.length;
};

/** formula: (n+1)*n/2 as expected sum */

var missingNumber = function(nums) {
  var sum = 0;
  for (var i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  var expected = ((nums.length + 1) * nums.length) / 2;
  return expected - sum;
};
