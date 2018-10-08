/**
 * @param {string} s
 * @return {number}
	A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...

 */

var titleToNumber = function(s) {
    let result = 0
    for (let i = 0; i < s.length ; i++){
        code = s.charCodeAt(i) - 64
        result += code*(26**(s.length - i - 1))
    }
    return result
};

/**
recursive
 */
var titleToNumber = function(s) {
    return s === "" ? 0 : titleToNumber(s.substr(1)) + (s.charCodeAt(0) - 64)*(26**(s.length - 1))
};