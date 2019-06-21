/**
Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
Note:

Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.

**/
//method 1. BFS O(m*n) O(m*n)
var ladderLength = function(beginWord, endWord, wordList) {
  let wordMap = new Map();
  for (let word of wordList) {
    for (let i = 0; i < word.length; i++) {
      let key = word.substring(0, i) + "*" + word.substring(i + 1);
      wordMap.has(key) ? wordMap.get(key).push(word) : wordMap.set(key, [word]);
    }
  }
  let queue = [[beginWord, 1]],
    wordSet = new Set();

  while (queue.length > 0) {
    let [word, count] = queue.shift();

    if (word === endWord) return count;

    if (!wordSet.has(word)) {
      wordSet.add(word);
      for (let i = 0; i < word.length; i++) {
        let key = word.substring(0, i) + "*" + word.substring(i + 1);
        if (!wordMap.has(key)) continue;
        for (let neighbors of wordMap.get(key)) {
          queue.push([neighbors, count + 1]);
        }
      }
    }
  }
  return 0;
};

//method 2 O(m*n) O(m)
var ladderLength = function(beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;

  let beginSet = new Set([beginWord]),
    endSet = new Set([endWord]),
    unVisited = new Set(wordList),
    count = 1;

  while (beginSet.size && endSet.size) {
    count++;

    let temp = new Set();

    for (let word of beginSet) {
      for (let i = 0; i < word.length; i++) {
        for (let c = "a".charCodeAt(0); c <= "z".charCodeAt(0); c++) {
          let key =
            word.substring(0, i) +
            String.fromCharCode(c) +
            word.substring(i + 1);
          if (endSet.has(key)) return count;

          if (unVisited.has(key)) {
            temp.add(key);
            unVisited.delete(key);
          }
        }
      }
    }
    beginSet = temp;
  }
  return 0;
};
