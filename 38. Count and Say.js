/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) {
    return "1";
  }
  if (n === 2) {
    return "11";
  }

  let s = "11";

  for (let i = 2; i < n; i++) {
    let temp = "";
    let count = 1;

    for (let j = 1; j < s.length + 1; j++) {
      if (j > s.length) {
        temp += count + s[j - 1].toString();
        count = 1;
        break;
      }
      if (s[j] !== s[j - 1]) {
        temp += count;
        temp += s[j - 1].toString();
        count = 1;
      } else {
        count++;
      }
    }
    s = temp;
  }
  return s;
};

console.log(countAndSay(4));
