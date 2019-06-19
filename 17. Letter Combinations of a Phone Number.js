/**
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:

Although the above answer is in lexicographical order, your answer could be in any order you want.
 */

/**
 * @param {string} digits
 * @return {string[]}
 */

// O(3^N * 4^M) O(3^N * 4^M)

var letterCombinations = function (digits) {
  if (digits.length === 0) return []
  let phoneMap = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  }
  let res = []
  let _backtrack = (str, digits) => {
    if (digits === "") {
      res.push(str)
    } else {
      let digit = digits.charAt(0)
      let letters = phoneMap[digit]
      for (let letter of letters) {
        _backtrack(str + letter, digits.substring(1))
      }
    }
  }

  _backtrack("", digits)
  return res
};