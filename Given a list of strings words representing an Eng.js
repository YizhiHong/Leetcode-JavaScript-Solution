// Given a list of strings words representing an English Dictionary, find the longest word in words that can be built one character at a time by other words in words. If there is more than one possible answer, return the longest word with the smallest lexicographical order.

// If there is no answer, return the empty string.
// Example 1:
// Input:
// words = ["w","wo","wor","worl", "world"]
// Output: "world"
// Explanation:
// The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".
// Example 2:
// Input:
// words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
// Output: "apple"
// Explanation:
// Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".

// Solution1 - hashSet and sort
// O(nlogn) O(n)
var longestWord = function(words) {
  let dict = new Set(),
    res = "";

  words.sort((a, b) => a.localeCompare(b));
  for (let word of words) {
    let len = word.length;
    if (len === 1 || dict.has(word.substring(0, len - 1))) {
      if (word.length > res.length) res = word;
      dict.add(word);
    }
  }

  return res;
};

var longestWord = function(words) {
  let dict = new Set(),
    res = "";

  words.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return a - b;
  });

  for (let word of words) {
    let len = word.length;
    if (len === 1 || dict.has(word.substring(0, len - 1))) {
      if (word.length > res.length) res = word;
      dict.add(word);
    }
  }

  return res;
};

// Solution2 - trie and dfs:
// Time Complexity: O(\sum w_i)O(∑wi), where w_iw
// i is the length of words[i]. This is the complexity to build the trie and to search it.
// If we used a BFS instead of a DFS, and ordered the children in an array, we could drop the need to check whether the candidate word at each node is better than the answer, by forcing that the last node visited will be the best answer.
// Space Complexity: O(\sum w_i)O(∑wi), the space used by our trie.

/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  class Trie {
    constructor() {
      this.table = new Map();
      this.word = null;
    }
    insert(word) {
      let curr = this;
      for (let w of word) {
        if (!curr.table.has(w)) {
          curr.table.set(w, new Trie());
        }
        curr = curr.table.get(w);
      }
      curr.word = word;
    }
  }

  let trie = new Trie(),
    root = trie;

  for (let word of words) {
    trie.insert(word);
  }

  // dfs
  let stack = [root],
    res = "";
  while (stack.length > 0) {
    let curr = stack.pop();
    if (curr.word !== null || curr === root) {
      if (curr !== root) {
        if (
          curr.word.length > res.length ||
          (curr.word.length === res.length && curr.word < res)
        ) {
          res = curr.word;
        }
      }
      for (let tr of curr.table.values()) {
        stack.push(tr);
      }
    }
  }

  return res;
};
