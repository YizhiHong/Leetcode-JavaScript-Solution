/**
 * @param {number[]} nums
 * @return {number}
 */

/** O(n) solution 
    maxSub(A[],i) = Max(maxSub(A[],i) + curr, curr)

**/

var maxSubArray = function(nums) {
    let [MaxGlobal,MaxCurrent] = [nums[0],nums[0]] 
    
    for (let i = 1; i< nums.length; i++){
        MaxCurrent = Math.max(nums[i] ,nums[i] + MaxCurrent)
        MaxGlobal = Math.max(MaxGlobal, MaxCurrent)
    }
    
    return MaxGlobal  
};

console.log(maxSubArray([-1,3,-2,4,5,-1,6]));
console.log(~~(100/3));
console.log( (100/3)>>0);