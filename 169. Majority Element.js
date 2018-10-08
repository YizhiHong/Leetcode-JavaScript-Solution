/**
Because Majoyrity means the numbers of candidate > n/2.
O(n)
O(1)
 */
var majorityElement = function(nums) {
    let cand = null;
    let count = 0;
    
    for (let num of nums) {
        if (count === 0) cand = num
        count += cand === num ? 1 : -1
    }
    return cand
};