/**
 1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
    ...
 */

// iterative
var convertToTitle = function(n) {
  let res = "";
  while (n > 0) {
    n = n - 1;
    res = String.fromCharCode((n % 26) + 65) + res;
    n = ~~(n / 26);
  }
  return res;
};

// recursive
var convertToTitle = function(n) {
  return n > 0
    ? convertToTitle(~~((n - 1) / 26)) +
        String.fromCharCode(((n - 1) % 26) + 65)
    : "";
};
