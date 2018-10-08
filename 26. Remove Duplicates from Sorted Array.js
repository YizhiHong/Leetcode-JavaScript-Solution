/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let temp = nums[0]
    
    let i = 1 
    
    while (i <= nums.length){
        if (temp === nums[i]){
            nums.splice(i,1)
        }else{
            temp = nums[i]
            i++
        }
        
    }
    return nums.length
};