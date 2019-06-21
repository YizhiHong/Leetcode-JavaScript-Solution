/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}

 Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

 */

var twoSum = function(nums, target) {
  let d = {};
  for (let i = 0; i < nums.length; i++) {
    if (d.hasOwnProperty(target - nums[i])) {
      return [d[target - nums[i]], i];
    }
    d[nums[i]] = i;
  }
};
