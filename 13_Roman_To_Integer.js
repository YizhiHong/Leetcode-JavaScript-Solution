var romanToInt = function(s) {
  const Conversion = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let total = 0;
  let i = 0;

  while (i <= s.length - 1) {
    let num = 0;
    let curr = Conversion[s[i]];
    let next = i + 1 >= s.length ? -1 : Conversion[s[i + 1]];

    if (curr < next) {
      num = next - curr;
      i++;
    } else {
      num = curr;
    }

    total += num;
    i++;
  }

  return total;
};

console.log(romanToInt("III"));
