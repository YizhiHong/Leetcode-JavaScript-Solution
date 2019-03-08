// Given a non-empty array of numbers, a0, a1, a2, … , an-1, where 0 ≤ ai < 231.
// Find the maximum result of ai XOR aj, where 0 ≤ i, j < n.
// Could you do this in O(n) runtime?
// Example:
// Input: [3, 10, 5, 25, 2, 8]
// Output: 28
// Explanation: The maximum result is 5 ^ 25 = 28.

// solution 1: O(n) O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
    let max = 0,
        mask = 0
    
    for(let i = 31 ; i>=0; i--){
         /*
            we need a mask so we don't lose any of the previous bits
            mask example:
                10000000000000000000000000000000
                11000000000000000000000000000000
                11100000000000000000000000000000
                11110000000000000000000000000000
                ....
        */
        mask = mask | (1 << i)
        
        let set = new Set();
        for(let num of nums){
            set.add(num & mask)
        }
        
        let tmp = max | (1 << i)
        for(let prefix of set.values()){
            if(set.has(tmp ^ prefix)) {
                max = tmp
                break
            }
        }
    }
    return max
};

// solution 2: prefix tree: O(n) O(n)

