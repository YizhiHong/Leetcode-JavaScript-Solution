// Given many words, words[i] has weight i.

// Design a class WordFilter that supports one function, WordFilter.f(String prefix, String suffix). It will return the word with given prefix and suffix with maximum weight. If no word exists, return -1.

// Examples:

// Input:
// WordFilter(["apple"])
// WordFilter.f("a", "e") // returns 0
// WordFilter.f("b", "") // returns -1
 
// Note:

// words has length in range [1, 15000].
// For each test case, up to words.length queries WordFilter.f may be made.
// words[i] has length in range [1, 10].
// prefix, suffix have lengths in range [0, 10].
// words[i] and prefix, suffix queries consist of lowercase letters only.
/**
	method 1: use Trie of Suffix Wrapped Words
	Time Complexity: O(NK^2 + QK) where NN is the number of words, KK is the maximum length of a word, and QQ is the number of queries.
	Space Complexity: O(NK^2)the size of the trie.
 * @param {string[]} words
 */

class Trie{
    constructor(){
        this.table = new Map()
        this.weight = 0
    }
    insert(word,index){
        let curr = this
        for(let w of word){
            if(!curr.table.has(w)) curr.table.set(w,new Trie())
            curr = curr.table.get(w)
            curr.weight = index
        }
        
    }
}
class WordFilter{
    constructor(words){
        this.trie = new Trie()
        this.init(words)
    }
    
    init(words){
        for(let i = 0; i< words.length; i++){
            let word = "#" + words[i]
            for(let j = 0; j< word.length; j++){
                this.trie.insert(word.substring(j+1) + word,i)
            }
        }
    }
    
    f(prefix, suffix){
        let curr = this.trie,
            word = suffix + "#" + prefix
        for(let c of word){
            if(!curr.table.has(c)){
                return -1
            }
            curr = curr.table.get(c)
        }
        return curr.weight
    }
};
