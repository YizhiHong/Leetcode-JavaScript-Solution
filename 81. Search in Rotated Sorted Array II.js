/**

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).

You are given a target value to search. If found in the array return true, otherwise return false.

Example 1:

Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
Example 2:

Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
Follow up:

This is a follow up problem to Search in Rotated Sorted Array, where nums may contain duplicates.
Would this affect the run-time complexity? How and why?

###O(n), worst case need to loop all elements.

 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let lo = 0,
        hi = nums.length - 1,
        mid;
    
    while(lo <= hi){
        mid = (lo + hi)>>1;
        if(nums[mid] === target) return true
        
        // if same skip 
        if(nums[mid] === nums[lo]) {
            lo++
        }else if( (nums[mid] < nums[lo]) === (target < nums[lo])){
            if(nums[mid] < target){
                lo = mid +1
            }else{
                hi = mid -1
            }
        }else{
            if(target >= nums[lo]){
                hi = mid - 1
            }else{
                lo = mid + 1
            }
            
        }
    }
    
    return target === nums[lo] ? true : false
};