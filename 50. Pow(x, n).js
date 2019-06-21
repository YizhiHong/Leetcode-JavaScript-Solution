/**
Implement pow(x, n), which calculates x raised to the power n (xn).

Example 1:

Input: 2.00000, 10
Output: 1024.00000
Example 2:

Input: 2.10000, 3
Output: 9.26100
Example 3:

Input: 2.00000, -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
Note:

-100.0 < x < 100.0
n is a 32-bit signed integer, within the range [−231, 231 − 1]
 */

//Solution 1
var myPow = function(x, n) {
  let res = 1;
  if (n > 0) {
    res = x ** n;
  } else if (n < 0) {
    res = (1 / x) ** Math.abs(n);
  }

  return res;
};

//Solution 2: recusive
var myPow = function(x, n) {
  if (n === 0) return 1;

  let t = myPow(x, ~~(n / 2));

  if (n % 2) {
    return n < 0 ? (1 / x) * t * t : x * t * t;
  } else {
    return t * t;
  }
};
