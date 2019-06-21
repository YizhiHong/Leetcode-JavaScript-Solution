/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (s === "") return true;
  let str = s
    .replace(/[^a-z0-9]/gi, "")
    .toLowerCase()
    .split("");
  for (let st of str) {
    if (st != str.pop()) return false;
  }
  return true;
};
