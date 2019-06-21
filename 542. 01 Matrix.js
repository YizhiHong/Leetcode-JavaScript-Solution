/**
Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

 

Example 1:

Input:
[[0,0,0],
 [0,1,0],
 [0,0,0]]

Output:
[[0,0,0],
 [0,1,0],
 [0,0,0]]
Example 2:

Input:
[[0,0,0],
 [0,1,0],
 [1,1,1]]

Output:
[[0,0,0],
 [0,1,0],
 [1,2,1]]
 */

// BFS: O(M*N) O(N)
var updateMatrix = function(matrix) {
  if (matrix.length === 0) return [[]];
  let queue = [],
    row = matrix.length,
    col = matrix[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j]) {
        matrix[i][j] = 10001;
      } else {
        queue.push(i * col + j);
      }
    }
  }
  let dir = [0, 1, 0, -1, 0];
  while (queue.length > 0) {
    let curr = queue.shift();
    for (let d = 0; d < dir.length - 1; d++) {
      let x = ~~(curr / col) + dir[d];
      let y = (curr % col) + dir[d + 1];
      if (
        x >= 0 &&
        x < row &&
        y >= 0 &&
        y < col &&
        matrix[x][y] > 0 &&
        matrix[x][y] > matrix[~~(curr / col)][curr % col] + 1
      ) {
        matrix[x][y] = matrix[~~(curr / col)][curr % col] + 1;
        queue.push(x * col + y);
      }
    }
  }
  return matrix;
};

var updateMatrix = function(matrix) {
  if (matrix.length === 0) return [[]];
  let queue = [],
    row = matrix.length,
    col = matrix[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j]) {
        matrix[i][j] = 10001;
      } else {
        queue.push([i, j]);
      }
    }
  }
  let dir = [0, 1, 0, -1, 0];
  while (queue.length > 0) {
    let [i, j] = queue.shift();
    for (let d = 0; d < dir.length - 1; d++) {
      let x = i + dir[d];
      let y = j + dir[d + 1];
      if (
        x >= 0 &&
        x < row &&
        y >= 0 &&
        y < col &&
        matrix[x][y] > 0 &&
        matrix[x][y] > matrix[i][j] + 1
      ) {
        matrix[x][y] = matrix[i][j] + 1;
        queue.push([x, y]);
      }
    }
  }
  return matrix;
};

// method 2: DP

var updateMatrix = function(matrix) {
  if (matrix.length === 0) return [[]];
  let row = matrix.length,
    col = matrix[0].length,
    result = new Array(row).fill(0).map(() => new Array(col).fill(10001));

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j]) {
        if (i > 0) result[i][j] = Math.min(result[i][j], result[i - 1][j] + 1);
        if (j > 0) result[i][j] = Math.min(result[i][j], result[i][j - 1] + 1);
      } else {
        result[i][j] = 0;
      }
    }
  }

  for (let i = row - 1; i >= 0; i--) {
    for (let j = col - 1; j >= 0; j--) {
      if (i < row - 1)
        result[i][j] = Math.min(result[i][j], result[i + 1][j] + 1);
      if (j < col - 1)
        result[i][j] = Math.min(result[i][j], result[i][j + 1] + 1);
    }
  }
  return result;
};
