/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
  if (num === 0) return "Zero";

  const dict = {
    "20": [
      "",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen"
    ],
    "100": [
      "",
      "Ten",
      "Twenty",
      "Thirty",
      "Forty",
      "Fifty",
      "Sixty",
      "Seventy",
      "Eighty",
      "Ninety"
    ],
    "1000": ["", "Thousand", "Million", "Billion"]
  };
  const translate = n => {
    if (n === 0) {
      return "";
    } else if (n < 20) {
      return dict["20"][n] + " ";
    } else if (n < 100) {
      return dict["100"][~~(n / 10)] + " " + translate(n % 10);
    } else {
      return dict["20"][~~(n / 100)] + " Hundred " + translate(n % 100);
    }
  };

  let res = "";

  for (let i = 0; num > 0; i++) {
    if (num % 1000 !== 0)
      res = translate(num % 1000) + dict["1000"][i] + " " + res;
    num = ~~(num / 1000);
  }

  return res.trim();
};
