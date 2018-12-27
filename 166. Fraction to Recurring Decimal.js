/**

Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

If the fractional part is repeating, enclose the repeating part in parentheses.

Example 1:

Input: numerator = 1, denominator = 2
Output: "0.5"
Example 2:

Input: numerator = 2, denominator = 1
Output: "2"
Example 3:

Input: numerator = 2, denominator = 3
Output: "0.(6)"


 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */


//O(n) O(n)

String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

var fractionToDecimal = function(numerator, denominator) {
    let final = numerator/denominator,
        integer = Math.abs(~~(final)),
        res = final < 0 ? "-" : ""
        
    let rem = Math.abs(numerator%denominator);
    res = res + integer
    if (!rem) return res
    
    let hashMap = new Map(),
        den = Math.abs(denominator)
    
    res = res + "."
    rem = rem*10 
    
    while(rem){
        let quotient = ~~(rem/den)
        if(hashMap.has(rem)){
            res = res.splice(hashMap.get(rem),0,"(") + ")"
            return res
        }
        hashMap.set(rem, res.length);
        res = res + quotient
        rem = 10 * (rem%den)
    }
    
    return res
};