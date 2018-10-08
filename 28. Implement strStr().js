/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStrIndexOf = function(haystack, needle) {
    return haystack.indexOf(needle)
};
var strStr = function(haystack, needle) {
    for (let i = 0; ; i++) {
        for (let j = 0; ; j++) {
          if (j === needle.length) {return i}
          if (i + j === haystack.length) {return -1}
          if (needle.charAt(j) !== haystack.charAt(i + j)) {break}
        }
      }
};
console.log(strStr("aaaaa",""));