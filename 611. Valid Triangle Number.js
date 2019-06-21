/**
Given an array consists of non-negative integers, your task is to count the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.
Example 1:

Input: [2,2,3,4]
Output: 3
Explanation:
Valid combinations are: 
2,3,4 (using the first 2)
2,3,4 (using the second 2)
2,2,3
Note:

The length of the given array won't exceed 1000.
The integers in the given array are in the range of [0, 1000].

 * @param {number[]} nums
 * @return {number}
 */

// S1:O(n^2) O(1)

var triangleNumber = function(nums) {
  let res = 0;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      let k = j + 1;
      while (k < nums.length && nums[i] + nums[j] > nums[k]) k++;
      res = res + k - 1 - j;
    }
  }
  return res;
};

// S2:O(n^2) O(1)
var triangleNumber = function(nums) {
  let res = 0;
  nums.sort((a, b) => a - b);

  for (let k = 2; k < nums.length; k++) {
    let i = 0,
      j = k - 1;

    while (i < j) {
      if (nums[k] < nums[i] + nums[j]) {
        res = res + j - i;
        j--;
      } else {
        i++;
      }
    }
  }
  return res;
};
