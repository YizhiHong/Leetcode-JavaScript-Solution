/**
Given an integer, write an algorithm to convert it to hexadecimal. For negative integer, two’s complement method is used.

Note:

All letters in hexadecimal (a-f) must be in lowercase.
The hexadecimal string must not contain extra leading 0s. If the number is zero, it is represented by a single zero character '0'; otherwise, the first character in the hexadecimal string will not be the zero character.
The given number is guaranteed to fit within the range of a 32-bit signed integer.
You must not use any method provided by the library which converts/formats the number to hex directly.
Example 1:

Input:
26

Output:
"1a"

*/
var toHex = function(num) {
  if (num === 0) return "0";
  let hex = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f"
    ],
    res = "";

  while (num) {
    res = hex[num & 15] + res;
    num = num >>> 4;
  }
  return res;
};

//** method 2

var toHex = function(num) {
  const hex = d => {
    let r = d % 16;
    if (d - r == 0) {
      return toChar(r);
    }
    return hex((d - r) / 16) + toChar(r);
  };

  const toChar = n => {
    const alpha = "0123456789abcdef";
    return alpha.charAt(n);
  };

  if (num < 0) {
    num += 2 ** 32;
  }

  return hex(num);
};
d;
