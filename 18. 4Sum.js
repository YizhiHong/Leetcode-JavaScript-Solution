/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 /*
 time space
    My solution: O(n^4) O(n^2)
 **/

var fourSum = function(nums, target) {
    if(nums.length < 4) return []
    
    let res = new Set()
    let table = new Map()
    let sum;
    nums.sort((a,b)=>a-b)
    for(let i=0; i<nums.length; i++){
        for(let j = i+1; j< nums.length; j++){
            sum = nums[i] + nums[j]
            if(table.has(target-sum)){
                for(let values of Array.from(table.get(target-sum))){
                    res.add([...(values.split(",").map(Number)),nums[i],nums[j]].toString())
                }
            }
                    
        }
        for( let k = 0; k < i ; k++){
            sum = nums[i]+nums[k]
            if(!table.has(sum)){
                table.set(sum,new Set())
            }
            table.get(sum).add([nums[k],nums[i]].toString())
        }
        
    }
    res = Array.from(res).map((str) => {
        return str.split(',').map(Number);
    })
    
    return res
};


/**
time space
Better Performance: O(n^4) O(1)

*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if(nums.length < 3) return []
    
    let res=[],
        lens = nums.length
    
    nums.sort((a,b)=>a-b)
    
    for(let i=0;i< lens-3;i++){
        if(nums[i]+nums[i+1]+nums[i+2]+nums[i+3] >target) break;
        
        if(nums[i]+nums[lens-1] +nums[lens-2] +nums[lens-3] < target) continue;
        
        if(i>0 & nums[i]===nums[i-1])continue;
        
        for(let j=i+1; j< lens-2 ;j++){
            
            if(nums[i]+nums[j]+nums[j+1]+nums[j+2] > target) break;
            if(nums[i]+nums[j]+nums[lens-1]+nums[lens-2] < target)continue;
            
            if(j>i+1 && nums[j]===nums[j-1]) continue;
            
            let start = j+1;
            let end = lens-1;
            
            while(start<end){
               let sum = nums[i]+nums[j]+nums[start]+nums[end]
                
                if(sum === target){
                    
                    res.push([nums[i],nums[j],nums[start],nums[end]])
                    while(nums[start]===nums[start+1]) start++
                    while(nums[end]===nums[end-1]) end--
                }
                sum < target ? start++ : end--;
            }   
        }
    }
    
    
    return res;
    
    
};
