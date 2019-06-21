/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let res = [],
    used = new Array(nums.length).fill(false);

  nums.sort((a, b) => a - b);

  permute([], res);

  function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  function permute(arr, result) {
    if (arr.length === nums.length) {
      result.push([...arr]);
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && used[i - 1]) continue;
      used[i] = true;
      arr.push(nums[i]);
      permute(arr, result);
      used[i] = false;
      arr.pop();
    }
  }
  return;
};
