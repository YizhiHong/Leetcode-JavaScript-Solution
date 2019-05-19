/**
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

 // O(log(min(m,n))) O(1)
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length) return findMedianSortedArrays(nums2,nums1)
    let xLen = nums1.length,
        yLen = nums2.length,
        lo = 0,
        hi = xLen
    
    while (lo <= hi){
        let midX = ~~((lo + hi)/2),
            midY = ~~((xLen + yLen +1)/2) - midX
        
        let maxLeftX = midX === 0 ? -Infinity : nums1[midX - 1],
            minRightX = midX === xLen ? Infinity : nums1[midX],
            maxLeftY = midY === 0 ? -Infinity : nums2[midY - 1],
            minRightY = midY === yLen ? Infinity : nums2[midY]
        
        if(maxLeftX <= minRightY && maxLeftY <= minRightX){
            return (xLen+yLen)%2 === 0
                ? (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY))/2
                : Math.max(maxLeftX, maxLeftY)
        }else if(maxLeftX > minRightY){
            hi = midX - 1
        }else{
            lo = midX + 1
        }
    }
    return null
};