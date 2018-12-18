/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */

 /**
    hashTable O(n^2) O(n^2)
 **/
var fourSumCount = function(A, B, C, D) {
    let hashTable = new Map()
    let result = 0
    
    for(let a of A){
        for(let b of B){
            let prev = hashTable.get(-a-b)
           if(prev){
               hashTable.set(-a-b, prev+1)
           }else{
                hashTable.set(-(a+b), 1)
           }
        }
    }
    
    for(let c of C){
        for(let d of D){
            if( hashTable.has(c+d)){
                result = result + hashTable.get(c+d)
            }
        }
    }
    
    
    return result
    
};