/**
 * @param {number[]} nums
 * @return {boolean}
 */

/** Method 1: Set */
var containsDuplicate = function(nums) {
    return (new Set(nums)).size < nums.length
};

/** O(n) O(n) */


/** Method 2: sort */


/** Method 3: bit manipulation*/
var containsDuplicate = function(nums) {
   let a = new Array();
    let b = new Array();
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] >=0) {
            let hash = nums[index] >> 5;
            let ind = nums[index] & 31;
            let check = 1 << ind;
            if ((a[hash] & check )!= 0) {
                return true;
            }
            a[hash] |= check;
        } else {
            let n = Math.abs(nums[index]);
            let hash = n >> 5;
            let ind = n & 31;
            let check = 1 << ind;
            if ((b[hash] & check )!= 0) {
                return true;
            }
            b[hash] |= check;
        }
        
     }
     return false;
};
/** O(n) */