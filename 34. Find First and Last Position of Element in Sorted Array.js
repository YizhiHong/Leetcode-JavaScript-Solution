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