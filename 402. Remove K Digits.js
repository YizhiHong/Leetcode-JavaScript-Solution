/**
    Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

    Note:
    The length of num is less than 10002 and will be ≥ k.
    The given num does not contain any leading zero.
    Example 1:

    Input: num = "1432219", k = 3
    Output: "1219"
    Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
    Example 2:

    Input: num = "10200", k = 1
    Output: "200"
    Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
    Example 3:

    Input: num = "10", k = 2
    Output: "0"
    Explanation: Remove all the digits from the number and it is left with nothing which is 0.
*/

//stack: O(n) O(n)

var removeKdigits = function(num, k) {
  Array.prototype.peek = function() {
    return this[this.length - 1];
  };
  let stack = [];

  for (let i = 0; i < num.length; i++) {
    let c = Number(num.charAt(i));
    while (stack.length > 0 && k > 0 && stack.peek() > c) {
      stack.pop();
      k--;
    }
    stack.push(c);
  }
  while (k > 0) {
    k--;
    stack.pop();
  }
  while (stack[0] === 0) stack.shift();
  let res = stack
    .toString()
    .split(",")
    .join("");

  return res || "0";
};
