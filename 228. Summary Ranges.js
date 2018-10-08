/**
 * @param {number[]} nums
 * @return {string[]}
 Given a sorted integer array without duplicates, return the summary of its ranges.

 Input:  [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: 0,1,2 form a continuous range; 4,5 form a continuous range.
 */

 /** 
    O(n) space: O(n) worst case. such as [1,2,3,4,5,6]
 */

var summaryRanges = function(nums) {
    let res = []
    let arr = []
    for (let i = 0; i< nums.length; i++){
        arr.push(nums[i])
        if(nums[i+1] - nums[i] > 1 || i === nums.length -1){
            if(arr[0] === arr[arr.length-1]){
                res.push((arr[0]).toString())
            }else{
                res.push(arr[0] + "->" + arr[arr.length-1])
            }
            arr = []
        }else{
            arr.push(nums[i+1])
        }
    }
    
    return res
};

 /** 
    O(n) space: O(1) two pointer
 */

var summaryRanges = function(nums) {
    let res = []
    let start,end;
    for (let i = 0; i< nums.length; i++){
        start ? null : start = nums[i].toString()
        if(nums[i+1] - nums[i] > 1 || i === nums.length -1){
            if(start === end || !end){
                res.push(start)
            }else{
                res.push(start + "->" + end)
            }
            end = null
            start = null
        }else{
            end = nums[i+1].toString()
        }
    }
    
    return res
};