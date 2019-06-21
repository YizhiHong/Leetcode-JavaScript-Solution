/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
  if (matrix === []) return true;
  let l1 = matrix.length,
    l2 = matrix[0].length;

  for (let i = 0; i <= l1; i++) {
    for (let j = 0; j <= l2; j++) {
      if (i + 1 < l1 && j + 1 < l2) {
        if (matrix[i + 1][j + 1] !== matrix[i][j]) return false;
      }
    }
  }
  return true;
};
