/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if (digits[0] === 0) {return [1]}
    let i = digits.length -1
    while(true){
        i >= 0 ? digits[i]+=1 : digits.unshift(1)
        if (digits[i] === 10){
            digits[i] = 0
            i--
        }else{
            break
        }
    }
    return digits
};

console.log(plusOne([9]));