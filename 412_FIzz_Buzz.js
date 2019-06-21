var fizzBuzz = function(n) {
  let output = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      i % 5 === 0 ? output.push("FizzBuzz") : output.push("Fizz");
    } else if (i % 5 === 0) {
      i % 3 === 0 ? output.push("FizzBuzz") : output.push("Buzz");
    } else {
      output.push(i.toString());
    }
  }
  return output;
};

console.log(fizzBuzz(15));
