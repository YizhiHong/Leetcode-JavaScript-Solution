/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 // method 1: swap
var permute = function(nums) {
    let res = []
    
    _permute(nums,nums,0)
    
    function swap(arr,a,b){
        let temp = arr[a]
        arr[a] = arr[b]
        arr[b] = temp
    }
    
    function _permute(p, numbers ,idx){
        //base case: if reach the end 
        if( idx >= numbers.length){
            res.push([...p])
            return
        }
        for(let i = idx; i < numbers.length ; i++){
            swap(p,idx,i)
            _permute(p,numbers,idx+1)
            swap(p,idx,i)
        }
        
    }
    
    return res
};

//method 2: backtraking
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = []
    
    _permute(nums,[],0)
    
    function _permute(numbers, num ,idx){
        //base case: if reach the end 
        if( num.length >= numbers.length){
            num.push(numbers[idx])
            res.push(num)
            return
        }
        for(let i = 0; i < numbers.length ; i++){
            if(!num.includes(numbers[i])){
                let newNum = [...num,numbers[i]]
                _permute(numbers, newNum, idx+1)    
                newNum.pop()
            }
        }
        
    }
    
    return res
};



