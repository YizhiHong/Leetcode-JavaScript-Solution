/**
Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
**/

// Solution 2, O(n) O(n)
var longestPalindrome = function(s) {
  let dict = new Map(),
    res = 0;

  for (let str of s.split("")) {
    if (dict.get(str) > 0) {
      dict.set(str, dict.get(str) - 1);
      res = res + 2;
    } else {
      dict.set(str, 1);
    }
  }
  for (let value of dict.values()) {
    if (value > 0) {
      return res + 1;
    }
  }
  return res;
};

// Solution 2, O(n) O(n)
var longestPalindrome = function(s) {
  let dict = {},
    res = 0,
    flag = 0;

  for (let str of s) {
    if (dict[str] > 0) {
      dict[str] = 0;
      res = res + 2;
      flag--;
    } else {
      dict[str] = 1;
      flag++;
    }
  }

  return res + Math.min(1, flag);
};
