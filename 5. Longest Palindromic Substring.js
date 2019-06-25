/**
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
 */

// dp O(n^2) O(n^2)
var longestPalindrome = function (s) {
  let dp = new Array(s.length).fill(new Array(s.length)),
    res = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= i; j++) {
      dp[i][j] =
        s.charAt(i) === s.charAt(j) && (j + 1 >= i - 1 || dp[i - 1][j + 1]);
      if (dp[i][j] && i - j + 1 > res.length) {
        res = s.substring(j, i + 1);
      }
    }
  }

  return res;
};

// dp O(n^2) O(1)

/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) { // if any string less than 2, It's Palindrome.
    return s;
  }
  let res = ""
  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i) // make sure even works
    expandAroundCenter(i, i + 1) // make sure oad works
  }

  function expandAroundCenter(left, right) {
    // if left and right in range and equal.
    while (left >= 0 && right <= s.length && s.charAt(left) === s.charAt(right)) {
      left--
      right++
    }
    let curr = s.substring(left + 1, right)
    if (curr.length > res.length) res = curr // check if it's max longest

  }

  return res
};

// 
var longestPalindrome = function (s) {
  let len = s.length,
    start = 0,
    end = 0,
    i = 0,
    left, right, array = s.split('');
    
  if (s.length < 2) {
    return s;
  }
  for (i; i < len;) {
    left = i;
    right = i;

    if (len - i <= 0) {
      break;
    }
    while (right < (len - 1) && array[right + 1] === array[right]) {
      right++;
    }
    i = right + 1;

    while (right < (len - 1) && left > 0 && array[right + 1] === array[left - 1]) {
      right++;
      left--;
    }
    let distance = right - left + 1;

    if (end < distance) {
      end = distance;
      start = left;
    }
  }

  return s.substr(start, end);
};