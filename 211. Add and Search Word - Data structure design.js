// Design a data structure that supports the following two operations:

// void addWord(word)
// bool search(word)
// search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

// Example:

// addWord("bad")
// addWord("dad")
// addWord("mad")
// search("pad") -> false
// search("bad") -> true
// search(".ad") -> true
// search("b..") -> true
// Note:
// You may assume that all words are consist of lowercase letters a-z.

/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  this.node = new Map();
  this.isWord = false;
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let _this = this;
  for (let w of word) {
    if (!_this.node.has(w)) {
      _this.node.set(w, new WordDictionary());
    }
    _this = _this.node.get(w);
  }
  _this.isWord = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  const _search = (dict, idx) => {
    if (idx == word.length) return dict.isWord;
    let w = word.charAt(idx);
    if (w !== ".") {
      return dict.node.has(w) && _search(dict.node.get(w), idx + 1);
    } else {
      for (let w of dict.node.keys()) {
        if (_search(dict.node.get(w), idx + 1)) {
          return true;
        }
      }
    }
    return false;
  };

  return _search(this, 0);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = Object.create(WordDictionary).createNew()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
