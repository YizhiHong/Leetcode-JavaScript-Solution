/**
Nearly every one have used the Multiplication Table. But could you find out the k-th smallest number quickly from the multiplication table?

Given the height m and the length n of a m * n Multiplication Table, and a positive integer k, you need to return the k-th smallest number in this table.

Example 1:
Input: m = 3, n = 3, k = 5
Output: 
Explanation: 
The Multiplication Table:
1   2   3
2   4   6
3   6   9

The 5-th smallest number is 3 (1, 2, 2, 3, 3).
Example 2:
Input: m = 2, n = 3, k = 6
Output: 
Explanation: 
The Multiplication Table:
1   2   3
2   4   6

The 6-th smallest number is 6 (1, 2, 2, 3, 4, 6).
*/

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(m, n, k) {
    
    let lo = 0,
        hi = m*n
    
    while (lo < hi){
        let mid = ~~((lo+hi)/2)
        if(checkK(mid)){
            hi = mid
        }else{
            lo = mid + 1
        }
    }
    return lo
    
    function checkK(x){
        let count = 0;
        for (let i = 1; i <= m; i++) {
            count += Math.min(~~(x/i), n);
        }
        return count >= k;
    }
};