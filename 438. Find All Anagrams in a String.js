/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}

Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".

 */

/** solution1: slide window two array O(n) O(26*2) constant */
var findAnagrams = function(s, p) {
    let table = new Array(26).fill(0),
        cpTable = new Array(26).fill(0),
        res = [],
        a = 'a'.charCodeAt(0),
        len = p.length
    
    const compareArray = (a,b) => {
        return JSON.stringify(a) === JSON.stringify(b)
    }
    
    for(let str of p.split("")){
        table[str.charCodeAt(0) - a] ++
    }
     
    for (let i = 0; i < s.length; i++){
        let first = i - len + 1
        
        cpTable[s.charCodeAt(i) - a] ++
        if(first < 0) continue
        
        if(compareArray(cpTable,table)){
            res.push(first)
        }
        cpTable[s.charCodeAt(first) - a] --
    }
    
    return res
};
/**
solution 2: slide window one array with counter O(n) O(26*2) constant
 */
var findAnagrams = function(s, p) {
    let table = new Array(26).fill(0),
        res = [],
        a = 'a'.charCodeAt(0),
        len = p.length,
        count = len

    for(let str of p.split("")){
        table[str.charCodeAt(0) - a] ++
    }
     
    for (let i = 0; i < s.length; i++){
        let first = i - len + 1,
            lastIdx = s.charCodeAt(i) - a,
            firstIdx = s.charCodeAt(first) - a
        
        if (table[lastIdx] > 0) count--
        table[lastIdx] --
        
        if(count === 0 && first >=0){
            res.push(first)
        }
        
        if(table[firstIdx] >= 0 && first >= 0) count++
        table[firstIdx] ++
    }
    
    return res
};
