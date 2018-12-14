/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if(nums.length < 3) return null
    let closest = Infinity,
        result;
    
    nums.sort((a,b)=>a-b)
    
    for(let start = 0; start < nums.length-2; start++){
        let second = start + 1,
            end = nums.length - 1,
            total;
        
        while(second < end){
            total = nums[start] + nums[second] + nums[end]

            if(total > target){
                end--
            }else if(total < target){
                second++
            }else{
                return total
            }
            
            if(Math.abs(total-target)< closest){
                closest = Math.abs(total-target);
                result = total
            }
            
        }
    }
    
    return result
    
};