/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Array(26).fill(-1)
    let start = 'a'.charCodeAt(0)
    
    for(let i = 0; i < s.length ;i++){
        str = s.charCodeAt(i)
        map[str - start] ++
    }
    for(let j = 0; j < s.length; j++){
        str = s.charCodeAt(j)
        if (map[str - start] === 0) return j
    }
    return -1
};