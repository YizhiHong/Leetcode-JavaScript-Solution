/**
 * A string S of lowercase letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

Example 1:
Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
Note:

S will have length in range [1, 500].
S will consist of lowercase letters ('a' to 'z') only.
 */

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  const lastPosition = new Array(26).fill(0),
    a = 'a'.charCodeAt(0)
  /** remember the last position of the string to key the range  */
  for (let i = 0; i < S.length; i++) {
    lastPosition[S.charCodeAt(i) - a] = i
  }
  let res = [],
    start = 0,
    end = 0
  for (let i = 0; i < S.length; i++) {
    end = Math.max(end, lastPosition[S.charCodeAt(i) - a])
    if (end === i) { // reach the last element
      res.push(end - start + 1)
      start = end + 1
    }
  }
  return res

};