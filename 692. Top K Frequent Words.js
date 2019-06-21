// Given a non-empty list of words, return the k most frequent elements.

// Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

// Example 1:
// Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// Output: ["i", "love"]
// Explanation: "i" and "love" are the two most frequent words.
//     Note that "i" comes before "love" due to a lower alphabetical order.
// Example 2:
// Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
// Output: ["the", "is", "sunny", "day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
//     with the number of occurrence being 4, 3, 2 and 1 respectively.
// Note:
// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Input words contain only lowercase letters.
// Follow up:
// Try to solve it in O(n log k) time and O(n) extra space.

// sort O(nlogn) O(n)
var topKFrequent = function(words, k) {
  let hashMap = new Map();

  for (let w of words) {
    let val = hashMap.get(w) + 1 || 1;
    hashMap.set(w, val);
  }

  return [...hashMap.keys()]
    .sort((a, b) => {
      if (hashMap.get(a) > hashMap.get(b)) {
        return -1;
      } else if (hashMap.get(a) < hashMap.get(b)) {
        return 1;
      } else {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      }
    })
    .slice(0, k);
};

//bucket O(n) O(n)
var topKFrequent = function(words, k) {
  let set = Array.from(new Set([...words])),
    hashMap = new Map(set.map(w => [w, 0])),
    max = 0;

  for (let w of words) {
    let val = hashMap.get(w) + 1;
    hashMap.set(w, val);
    if (val > max) max = val;
  }

  let bucket = new Array(max).fill(null);

  for (let [key, count] of hashMap.entries()) {
    if (bucket[count]) {
      bucket[count].push(key);
    } else {
      bucket[count] = [key];
    }
  }

  let res = [];
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) {
      if (bucket.length > 1) bucket[i].sort();
      res.push(...bucket[i]);
    }
    if (k < res.length) {
      return res.slice(0, k);
    } else if (k === res.length) return res;
  }
  return res;
};
