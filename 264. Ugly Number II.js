/**
  Write a program to find the n-th ugly number.

  Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. 

  Example:

  Input: n = 10
  Output: 12
  Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
  Note:  

  1 is typically treated as an ugly number.
  n does not exceed 1690.
*/
/**
 * @param {number} n
 * @return {number}
 */
// O(n) O(n)
// ref: https://leetcode.com/problems/ugly-number-ii/discuss/69362/O(n)-Java-solution
var nthUglyNumber = function(n) {
  if (n <= 0) return [];

  const uglyDP = new Array(n);
  uglyDP[0] = 1;
  let [i, j, k] = [0, 0, 0];
  for (let l = 1; l < n; l++) {
    uglyDP[l] = Math.min(uglyDP[i] * 2, uglyDP[j] * 3, uglyDP[k] * 5);
    if (uglyDP[l] === uglyDP[i] * 2) i++;
    if (uglyDP[l] === uglyDP[j] * 3) j++;
    if (uglyDP[l] === uglyDP[k] * 5) k++;
  }

  return uglyDP[uglyDP.length - 1];
};
