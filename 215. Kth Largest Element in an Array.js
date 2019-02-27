// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Example 1:

// Input: [3,2,1,5,6,4] and k = 2
// Output: 5
// Example 2:

// Input: [3,2,3,1,2,4,5,5,6] and k = 4
// Output: 4
// Note: 
// You may assume k is always valid, 1 ≤ k ≤ array's length.



/**
Solution 1: sort - O(nlogn) O(1)
 */

var findKthLargest = function(nums, k) {
    nums.sort((a,b) => b-a)
    return nums[k-1]
};

/**
Solution 2: Priority Queue - minQueue O(nlogk), maxQueue O(n + klogn)
 */


/**
Solution 3: Quick Select -  Hoare Partition O(n) worst O(n^2)
 */

 var findKthLargest = function(nums, k) {
    let [lo,hi] = [0,nums.length-1],
        kth = (nums.length-k),
        res
    
    // partion like quicksort
    const _partition = (start,end) => {
        // let pivot = Math.floor(Math.random() * (end-start+1) + start)
        let pivot = start
        const _swap = (a,b) =>{
            [nums[a],nums[b]] = [nums[b],nums[a]]
        }
        
        while (start <= end){
            while(start <= end && nums[start] <= nums[pivot]) start++
            while(start <= end && nums[pivot] <= nums[end]) end--
            if(start > end){
                break
            }
            _swap(start,end)
        }
        _swap(pivot,end)
        return end
    }

    while(lo <= hi){
        res = _partition(lo,hi)
        if(res === kth) {
            return nums[res]
        }else if(res > kth){
            hi = res - 1
        }else{
            lo = res + 1
        }
    }
};
// solution 5: binary search O(nlogn)
var findKthLargest = function(nums, k) {
    let min = Math.min(...nums),
        max = Math.max(...nums),
        kth = nums.length - k + 1
    
    while (min < max) {
        let mid = Math.floor((min + max)/2);
        
        if (isKthLargest(mid, kth, nums)) {
            max = mid;
        } else {
            min = mid + 1;
        }
    }
    
    return min;
    
    function isKthLargest(target, k, nums) {
        nums.forEach(item=> {
            if(item <= target) k--
        })
        return k <= 0;
    }
};

