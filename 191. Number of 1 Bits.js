/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  if (n === 0) return 0;

  let count = 0;
  for (let i = 0; i < 32; i++) {
    count = count + (n & 1);
    n = n >>> 1;
  }
  return count;
};
