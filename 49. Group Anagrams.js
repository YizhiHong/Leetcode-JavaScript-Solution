/**
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// O(NK) O(NK)
var groupAnagrams = function(strs) {
  let count = new Array(26).fill(0),
    res = new Map(),
    start = "a".charCodeAt(0);

  for (let str of strs) {
    let map = [...count];
    for (let s of str) {
      map[s.charCodeAt(0) - start]++;
    }
    let key = "";
    for (let i = 0; i < 26; i++) {
      key = key + map[i];
    }

    if (!res.has(key)) res.set(key, []);
    res.get(key).push(str);
  }
  return [...res.values()];
};
