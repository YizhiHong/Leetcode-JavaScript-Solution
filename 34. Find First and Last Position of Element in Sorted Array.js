/**
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

**/

var searchRange = function(nums, target) {
    let res = [-1,-1]
    let lo = 0, hi = nums.length - 1
    let mid;
    while(lo <= hi){
        mid = ~~((lo+hi)/2)
        if(nums[mid] >= target){
            hi = mid - 1
        }else{
            lo = mid + 1
        }
    }
    //return left most 
    if(nums[lo] !== target){
        return res
    }
    res[0] = lo
    lo = 0 
    hi = nums.length - 1
    
    while(lo <= hi){
        mid = ~~((lo+hi)/2)
        if(nums[mid] > target){
            hi = mid - 1
        }else{
            lo = mid + 1
        }
    }
    res[1] = hi
    
    return res
};