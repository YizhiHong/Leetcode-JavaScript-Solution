/**
 * @param {number[]} nums
 * @return {number}
 */
 //O (n)
var findMin = function(nums) {
    for(let i = 0; i < nums.length -1; i++){
        if(nums[i]>nums[i+1]){
            return nums[i+1]
        }
    }
    return nums[0]
};

 //O (log n)

 var findMin = function(nums) {    
    let lo = 0,
        hi = nums.length -1,
        mid;
    
    while(lo < hi){
        mid = (lo+hi) >>1
        if(nums[hi] >= nums[mid]){
            hi = mid
        }else{
            lo = mid + 1
        }
    }
    return nums[lo]
};


var findMin = function(nums) {    
    let lo = 0,
        hi = nums.length -1,
        mid;
    
    if(nums[lo] <= nums[hi]) return nums[lo]

    while(lo < hi){
        mid = (lo+hi) >>1
        if( nums[mid] > nums[mid+1]) {
            return nums[mid+1]
        }
        if(nums[mid-1] > nums[mid]){
            return nums[mid]
        }
        if(nums[0] < nums[mid]){
            lo = mid
        }else{
            hi = mid - 1
        }
    }
};