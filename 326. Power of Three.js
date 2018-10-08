/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    while (n > 3){
        if(n%3 !== 0) return false
        n = n/3
    }
    if (n === 1) return true
    if (n < 3) return false
    return true
   
};

/* max Int num*/

var isPowerOfThree = function(n) {
    return n>0 && 1162261467 % n === 0
};