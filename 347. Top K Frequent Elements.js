// Given a non-empty array of integers, return the k most frequent elements.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
// Note:

// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
/**
	solution 1: hashTable and Heap
*/

/**
	solution 2: sort and map
 */
var topKFrequent = function(nums, k) {
    let set = Array.from(new Set([...nums])),
        mapSet = new Map(set.map(v => [v,0]))
    
    nums.forEach( (val) => {
        mapSet.set(val, mapSet.get(val)+1)
    })
    
    mapSet = [...mapSet]
    mapSet.sort((a, b) => (b[1]-a[1]))
    
    return mapSet.map(v => v[0]).slice(0,k)
};

/**
	solution 2: bucket and map
 */

 var topKFrequent = function(nums, k) {
    let hashTable = {},
        maxLen = 0
    // build hashTable
    for(let elm of nums){
        hashTable[elm] = hashTable[elm] + 1 || 1
        if(hashTable[elm] > maxLen) maxLen = hashTable[elm]
    }
    // build count bucket
    let bucket = new Array(maxLen).fill(0)
    for(let elm in hashTable){
        let count = hashTable[elm]
        if(bucket[count]){
            bucket[count].push(elm)
        }else{
            bucket[count] = [elm]
        }
    }
    
    // get res
    let res = []
    for(let i = bucket.length - 1; i>=0 ;i--){
        if(bucket[i]) {
            res.push(...bucket[i])
        }
        if(k < res.length){
            return res.slice(0,k)
        }else if(k === res.length) return res
    }
    return res
};