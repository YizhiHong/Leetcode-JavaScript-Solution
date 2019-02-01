/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// solution 1: insertion in sorted array.
// O((n-k+1)*k),  O(k)

var medianSlidingWindow = function(nums, k) {
    // sort the first window and apply to result
    let temp = nums.slice(0,k).sort((a,b) => a-b), 
        res = [],
        median = null
    
    const getMedian = function(){
        let mid = ~~(temp.length/2)
        if(k % 2 === 0){
            median = (temp[mid] + temp[mid-1]) / 2
        }else{
            median =  temp[mid]
        }
    }
    // should use binary search to delete
    const deleteNum = function(val) {
        for(let i = 0; i < temp.length; i++){
            if(val === temp[i]){
                temp = temp.slice(0,i).concat(temp.slice(i+1,temp.length))
                return;
            }
        }
    }
     // should use binary search to insert
    const addNum = function(val) {
        for(let i = 0; i < temp.length; i++){
            if(val <= temp[i]){
                temp.splice(i, 0, val)
                return;
            }
        }
        temp.push(val)
        return;
    }
    
    getMedian()
    res.push(median)
    
    for(let i = 1; i< nums.length - k + 1;i++){
        deleteNum(nums[i-1])
        addNum(nums[i+k - 1])
        getMedian()
        res.push(median)
    }
    
    return res
};