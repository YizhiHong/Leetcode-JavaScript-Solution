/**
    Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.
    Example 1:
    Input:s1 = "ab" s2 = "eidbaooo"
    Output:True
    Explanation: s2 contains one permutation of s1 ("ba").
    Example 2:
    Input:s1= "ab" s2 = "eidboaoo"
    Output: False
    Note:
    The input strings only contain lower case letters.
    The length of both given strings is in range [1, 10,000].
**/

// solution: slide window with array O(n) O(1)

var checkInclusion = function(s1, s2) {
  let table = new Array(26).fill(0),
    a = "a".charCodeAt(0),
    len = s1.length,
    count = len;

  for (let str of s1.split("")) {
    table[str.charCodeAt(0) - a]++;
  }

  for (let i = 0; i < s2.length; i++) {
    let first = i - len + 1,
      lastIdx = s2.charCodeAt(i) - a,
      firstIdx = s2.charCodeAt(first) - a;

    if (table[lastIdx] > 0) count--;
    table[lastIdx]--;

    if (count === 0 && first >= 0) {
      return true;
    }

    if (table[firstIdx] >= 0 && first >= 0) count++;
    table[firstIdx]++;
  }

  return false;
};
