
/**
Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
 */
 /**
    O(n) O(n)
 */
var isHappy = function(n) {
    let appearMap = new Map();
    let strs = n.toString().split("")
    let newNum
    while (newNum !== 1){
        newNum = 0
        for (let str of strs){
            newNum += Number(str)**2  
        } 
        if(appearMap.has(newNum)){
            return false
        }
        strs = newNum.toString().split("")
        appearMap.set(newNum,"")
    }
    return true
};




/**
    better
 */
 var isHappy = function(n) {
    let appearMap = new Map();
    let strs = n.toString().split("")
    let res = 0
    while (res !== 1){
        res = strs.map(Number).reduce((newNum, num) => newNum + num **2, 0)
        if(appearMap.has(res)){
            return false
        }
        strs = res.toString().split("")
        appearMap.set(res,"")
    }
    return true
};

/**
    Faster
 */
 /**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let strs = n.toString().split("")
    let res = 0
    while (res !== 1){
        res = strs.reduce((newNum, num) => newNum + Number(num) **2, 0)
        if(res === 4){
            return false
        }
        strs = res.toString().split("")
    }
    return true
};

/**
*/
var isHappy = function(n) {
    let res = n, presented = new Set()
    
    while(res !== 1){
        let total = 0, len = res.toString().length
        
        for(let i = 0; i < len; i++){
            let digit = res%10
            total = total + digit**2
            res = ~~(res/10)
        }
        res = total
        if(presented.has(res)) {
            return false
        }else{
            presented.add(res)
        }
    }
    return true
};