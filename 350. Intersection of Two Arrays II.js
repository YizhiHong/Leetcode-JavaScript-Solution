/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

/** two pointer O(nlogn) O(1)*/
var intersect = function(nums1, nums2) {
    
    let res = []
    if (nums1.length === 0 || nums2.length === 0 ) return res
    
    nums1.sort((a,b)=> a - b)
    nums2.sort((a,b)=> a - b)
    
    let p1 = 0
    let p2 = 0
        
    while ( p1 < nums1.length && p2 < nums2.length){
        if(nums1[p1] === nums2[p2]){
            res.push(nums1[p1++])
            p2++
        }else if(nums1[p1] > nums2[p2]){
            p2++
            
        }else{
            p1++
        }
    }
    return res
};

/** hash Map O(n), O(n)*/
var intersect = function(nums1, nums2) {
    let res = []
    
    let map = {}
    
    nums1.forEach((val)=>{
        if(map[val]){
            map[val]++
        }else{
            map[val] = 1
        }
    })
    
    nums2.forEach((val) =>{
        if(map[val] > 0){
            res.push(val)
            map[val]--
        }
    })

    return res
};