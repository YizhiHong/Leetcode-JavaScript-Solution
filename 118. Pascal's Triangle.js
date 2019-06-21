/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows == 0) return [];
  if (numRows == 1) return [[1]];

  let numbers = new Array(numRows);
  numbers[0] = [1];
  numbers[1] = [1, 1];

  for (let i = 2; i < numRows; i++) {
    let newRow = new Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      newRow[j] = numbers[i - 1][j - 1] + numbers[i - 1][j];
    }
    numbers[i] = newRow;
  }
  return numbers;
};
