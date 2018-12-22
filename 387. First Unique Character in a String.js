/**
 * @param {string} s
 * @return {number}
 */
/**
    O(n) O(1) //where time complexity O(n) depends on s.length.
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
/**
    O(1) O(1)
*/
var firstUniqChar = function(s) {
    let last = s.length, unique = s.length, found = false
    
    for(let i = 'a'.charCodeAt(0); i<= 'z'.charCodeAt(0);i++){
        let char = String.fromCharCode(i);
        last = s.indexOf(char);
        if(last === -1){
            continue;
        }else{
            if(s.lastIndexOf(char) === last && last < unique){
                found = true
                unique = last
            }
        }
    }
    
    return found ? unique: -1
};