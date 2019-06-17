/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.


The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
 */

// method 1: two pointer ref:https://www.youtube.com/watch?v=2LjNzbK2cmA
// O(n) O(1)
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let lo = 0,
    hi = height.length - 1,
    loMax = 0,
    hiMax = 0,
    total = 0;

  while (lo < hi) {
    if (height[lo] < height[hi]) {
      loMax = Math.max(loMax, height[lo]);
      total += loMax - height[lo];
      lo++;
    } else {
      hiMax = Math.max(hiMax, height[hi]);
      total += hiMax - height[hi];
      hi--;
    }
  }
  return total;
};
