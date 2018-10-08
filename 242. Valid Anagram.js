/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/** Hash Array O(n), O(1)*/
var isAnagram = function(s, t) {
if (s.length !== t.length) return false
    if (s === t) return true
    
    let hash = new Array(26).fill(0),
        head = 'a'.charCodeAt(0)
    
    for (let i = 0; i < s.length; i++) {
        hash[s.charCodeAt(i) - head]++
        hash[t.charCodeAt(i) - head]--
    }
    
    for (let v of hash){
        if (v !== 0) return false
    }

    return true
};



/** Hash Map */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    
    let charSet = new Map()
    
    t.split("").forEach((value,index) =>{
        charSet.has(value) ? 
            charSet.set(value,charSet.get(value)+1) :
            charSet.set(value,1)
    })
    
    s.split("").forEach((value,index) => {
        if( charSet.has(value)){
            charSet.set(value,charSet.get(value)-1)
            if (charSet.get(value) === 0) charSet.delete(value)
        }else{
            return false
        }
    })
    
    let sum = 0
    for (var value of charSet.values()) {
      sum = sum + value
    }
    
    return sum === 0
};