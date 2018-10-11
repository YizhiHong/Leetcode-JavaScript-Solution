/**
You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k.

Define a pair (u,v) which consists of one element from the first array and one element from the second array.

Find the k pairs (u1,v1),(u2,v2) ...(uk,vk) with the smallest sums.

Example 1:

Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
Output: [[1,2],[1,4],[1,6]] 
Explanation: The first 3 pairs are returned from the sequence: 
             [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
**/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    if(nums1.length === 0 || nums2.length === 0){
        return [];
    }
    let queue = [];
    function queuePush(i,j){
        if(i < nums1.length && j < nums2.length){
            for(let k = 0; k < queue.length ;k++){
                if( (nums1[i] + nums2[j]) < queue[k][0]){
                    queue.splice(k,0,[nums1[i] + nums2[j],i,j])
                    return
                }
            }
            queue.push([nums1[i] + nums2[j],i,j]);
        }
    }
    queuePush(0, 0);
    let pairs = [];
    while (queue.length !== 0 && pairs.length < k){
        let o = queue.shift();
        let i = o[1];
        let j = o[2];
        pairs.push([nums1[i], nums2[j]]);
        
        queuePush(i, j+1);
        if(j === 0){
            queuePush(i+1,0);
        }
    }
    return pairs;
};