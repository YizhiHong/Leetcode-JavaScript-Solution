/**
 * Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// DP O(n^2) O(n)
var wordBreak = function(s, wordDict) {
  let wordMap = new Set([...wordDict]);
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    //right pointer
    for (let j = 0; j < i; j++) {
      //left pointer
      if (dp[j] && wordMap.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  console.log(dp);
  return dp[s.length];
};

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// bfs O(n^2) O(n)
var wordBreak = function(s, wordDict) {
  let wordSet = new Set([...wordDict]);
  let visited = new Set();
  let queue = [];

  queue.unshift(0); // push start index
  while (queue.length > 0) {
    let start = queue.pop();
    if (visited.has(start)) continue;
    for (let i = start + 1; i <= s.length; i++) {
      if (wordSet.has(s.substring(start, i))) {
        queue.unshift(i);
        if (i === s.length) return true;
      }
    }
    visited.add(start);
  }
  return false;
};
