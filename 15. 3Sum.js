/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length < 3) return []
    
    let result = []
    nums.sort((a,b) => a-b)

    for(let start=0; start < nums.length - 2; start++){
        if(start>0 && nums[start] === nums[start-1]){
            continue;
        }
        
        let second = start+1, end = nums.length -1, total;
        
        while(second < end){
            
            total = nums[start] + nums[second] + nums[end]
            
            if(total > 0){
                end--
            }else if(total < 0){
                second++
            }else{
                result.push([nums[start],nums[second],nums[end]])
                while(nums[second]===nums[second+1] && second < end) second++
                while(nums[end]===nums[end-1] && second < end) end--
                second ++
                end--
            }
        }
    }
    
    return result
};    