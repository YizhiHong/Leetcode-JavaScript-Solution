/**
	Given an array of integers, find out whether there are two distinct indices i and j in the array such that the absolute difference between nums[i] and nums[j] is at most t and the absolute difference between i and j is at most k.

	Example 1:

	Input: nums = [1,2,3,1], k = 3, t = 0
	Output: true
	Example 2:

	Input: nums = [1,0,1,1], k = 1, t = 2
	Output: true
	Example 3:

	Input: nums = [1,5,9,1,5,9], k = 2, t = 3
	Output: false
 */

 /** solution 1: bucket O(n) O(k)
	ref:https://www.youtube.com/watch?v=yc4hCFzNNQc
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    if(nums.length === 0 || k < 1 || t < 0) return false
    
    let bucket = new Map(),
        bucketSize = t + 1,
        min = Math.min(...nums)
        
    for(let i = 0;  i < nums.length; i++){
        let index = ~~((nums[i] - min)/ bucketSize)
        
        // check current and its neigbors
        if(bucket.has(index)) return true
        if(bucket.has(index - 1) && nums[i] - bucket.get(index - 1) <= t) return true
        if(bucket.has(index + 1) && bucket.get(index + 1) - nums[i] <= t) return true
        
        //add to the bucket
        bucket.set(index, nums[i])
        
        //remove the index out of k
        if(i - k >= 0){
            bucket.delete(~~((nums[i-k] - min)/ bucketSize))
        }
    }
    return false
};

 /** solution 2: binary search tree -> no provided in es6, prefer to use java TreeSet
 	O(nlogk) O(k)
 */




