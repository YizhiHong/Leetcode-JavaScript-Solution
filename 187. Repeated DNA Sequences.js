/**
All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

Example:

Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"

Output: ["AAAAACCCCC", "CCCCCAAAAA"]
*/

/** Solution1: two set O(n) O(n) **/

var findRepeatedDnaSequences = function(s) {
    let len = 10,
        visited = new Set(),
        result = new Set()
    
    for(let i = 0; i < s.length - len + 1 ;i++){
        let str = s.substring(i, i + len)
        if(visited.has(str)) {
            result.add(str)
        }else{
            visited.add(str)
        }
    }
    return Array.from(result)
};