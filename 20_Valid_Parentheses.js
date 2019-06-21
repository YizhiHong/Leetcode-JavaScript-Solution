var isValid = function(s) {
  let match = {
    "(": ")",
    "{": "}",
    "[": "]"
  };
  let stack = [];
  let sa = [...s];

  for (let item of sa) {
    if (item === "(" || item === "[" || item === "{") {
      stack.push(item);
    } else {
      if (match[stack.pop()] !== item) {
        return false;
      }
    }
  }
  return stack.length === 0 ? true : false;
};

console.log(isValid("{}({})[]"));
