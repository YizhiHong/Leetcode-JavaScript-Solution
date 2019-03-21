// Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:

// Input: [1,2,2]
// Output:
// [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]


/**
 sort and skip, O(nlogn + n^2)
 */
var subsetsWithDup = function(nums) {
    let res = [[]],
        start
    
    nums.sort((a,b)=>a-b)
    
    for(let i = 0; i< nums.length; i++){
        if(i === 0 || nums[i] !== nums[i-1]) start = 0
        
        for(let j = res.length - 1; j >= start; start++ ){
            res.push([...res[start]])
            res[res.length-1].push(nums[i])
        }
    }

    return res
};

/**
ref: Leetcode
backtracking: 
    解决思路： 
    
    1.增加数组subset
    
    2.回溯法back tracking
    
    3.bit manipulation
    
    核心思路：如何避免加入重复的subset
    相比于题目78 Subset I的时候，Subset II会有重复的数字出现，
        举例 
                    i=0         i=1            i=3
        [1,2,2] -> [] [1] || [2] [1,2] || [2,2] [1,2,2]
        [1,2,3] -> [] [1] || [2] [1,2] || [2,3] [1,3] [1,2,3]
        
        在前两手的选择上都是一致的直到i=3的时候由于第一个nums有重复的数字所以并不能所有的subset上都加上2. 在处理第
        二个2的时候若是在[] [1]上加则会导致重复，这时候就需要判断目前i所代表的值是否等于i-1的数值，若是否定的则正常
        变化并更新last，肯定的话则从last的index加起，即[2] [1,2]上加上2.当后面又有重复的出现并不要紧因为只要不是
        连续重复就不会产生重复的数组。

    回溯法 case handle:
          
    Recursion case: 
                                
                                [1,2,2] 
                            /            \
                        [1]                 [2]
                    /       \             /     \
                [1,2]         [1]       [2,2]   [2]
              /       \      /   \      /
          [1,2,2]      x    x     [1]   x

*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = []
    nums.sort((a,b)=>a-b)
    backtrack(res, [], 0)
    function backtrack(results, result, start){
        results.push([...result])
        for(let i = start; i< nums.length; i++){
            
            result.push(nums[i])
            backtrack(results,result,i+1)
            result.pop()
            while(i < nums.length && nums[i+1] === nums[i]) i++
        }
    }
    
    return res
};


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = []
    nums.sort((a,b)=>a-b)
    backtrack(res, [], 0)
    function backtrack(results, result, start){
        results.push([...result])
        let len = nums.length
        for(let i = start; i< len; i++){
            if(i !== start && nums[i] === nums[i-1]) continue
            result.push(nums[i])
            backtrack(results,result,i+1)
            result.pop()
        }
    }
    
    return res
};


