/**
 recursive
 */
var subsets = function(nums) {
  const _subsets = (start, result, results) => {
    results.push(Array.from(result));

    for (let i = start; i < nums.length; i++) {
      result.push(nums[i]);

      _subsets(i + 1, result, results);
      result.pop();
    }
  };
  const res = [];
  _subsets(0, [], res);

  return res;
};

/**
 Iterative
*/

var subsets = function(nums) {
  let res = [[]];
  for (let num of nums) {
    let len = res.length;
    for (let i = 0; i < len; i++) {
      res.push(Array.from(res[i]));
      res[res.length - 1].push(num);
    }
  }
  return res;
};
