/**
 * Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

Note that the row index starts from 0.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 3
Output: [1,3,3,1]
Follow up:

Could you optimize your algorithm to use only O(k) extra space?
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let res = new Array(rowIndex + 1).fill(0)
  res[0] = 1
  for (let i = 1; i < rowIndex + 1; i++)
    for (let j = i; j >= 1; j--)
      res[j] += res[j - 1];
  return res;
};