// In English, we have a concept called root, which can be followed by some other words to form another longer word - let's call this word successor. For example, the root an, followed by other, which can form another word another.

// Now, given a dictionary consisting of many roots and a sentence. You need to replace all the successor in the sentence with the root forming it. If a successor has many roots can form it, replace it with the root with the shortest length.

// You need to output the sentence after the replacement.

// Example 1:

// Input: dict = ["cat", "bat", "rat"]
// sentence = "the cattle was rattled by the battery"
// Output: "the cat was rat by the bat"

// Note:

// The input will only have lower-case letters.
// 1 <= dict words number <= 1000
// 1 <= sentence words number <= 1000
// 1 <= root length <= 100
// 1 <= sentence words length <= 1000

/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {
  /**
   * Initialize your data structure here.
   */
  var Trie = function() {
    this.node = {};
    this.word = null;
  };

  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  Trie.prototype.insert = function(word) {
    let curr = this;
    for (let w of word) {
      if (!curr.node[w]) {
        curr.node[w] = new Trie();
      }
      curr = curr.node[w];
    }
    curr.word = word;
  };

  let trie = new Trie();

  for (let w of dict) {
    trie.insert(w);
  }

  let res = "";

  for (let word of sentence.split(" ")) {
    let curr = trie;
    for (let w of word) {
      if (!curr.node[w] || curr.word !== null) {
        break;
      }
      curr = curr.node[w];
    }
    res += curr.word !== null ? curr.word : word;
    res = res + " ";
  }

  return res.substring(0, res.length - 1);
};

//solution 2: reg
var replaceWords = function(dict, sentence) {
  return sentence.replace(
    new RegExp(`\\b(${dict.join("|")}).*?\\b`, "g"),
    "$1"
  );
};
