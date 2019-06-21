/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.node = new Map();
  this.isWord = false;
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let curr = this;

  for (let s of word) {
    if (curr.node.has(s)) {
      curr = curr.node.get(s);
    } else {
      curr = curr.node.set(s, new Trie()).get(s);
    }
  }
  curr.isWord = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let curr = this;
  if (curr.node.size === 0) return false;

  for (let s of word) {
    curr = curr.node.get(s);
    if (typeof curr === "undefined") return false;
  }
  return curr.isWord ? true : false;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let curr = this;
  if (curr.node.size === 0) return false;

  for (let s of prefix) {
    curr = curr.node.get(s);
    if (typeof curr === "undefined") return false;
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
