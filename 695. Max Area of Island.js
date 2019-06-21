/**
Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

Example 1:

[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
Example 2:

[[0,0,0,0,0,0,0,0]]
Given the above grid, return 0.
Note: The length of each dimension in the given grid does not exceed 50.

*/

// O(R*C) O(R*C)
var maxAreaOfIsland = function(grid) {
  let max = 0;
  if (grid.length === 0) return max;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        max = Math.max(max, findMax(0, i, j));
      }
    }
  }

  return max;

  function findMax(count, r, c) {
    if (grid[r][c] === 1) {
      grid[r][c] = 0;
      let temp = count;
      if (r > 0) count += findMax(temp, r - 1, c);
      if (c > 0) count += findMax(temp, r, c - 1);
      if (r < grid.length - 1) count += findMax(temp, r + 1, c);
      if (c < grid[0].length - 1) count += findMax(temp, r, c + 1);
      return count + 1;
    } else {
      return 0;
    }
  }
};

// Method 2
var maxAreaOfIsland = function(grid) {
  let max = 0;
  if (grid.length === 0) return max;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        max = Math.max(max, Area(i, j));
      }
    }
  }

  return max;

  function Area(r, c) {
    if (
      r < 0 ||
      c < 0 ||
      r > grid.length - 1 ||
      c > grid[0].length - 1 ||
      grid[r][c] === 0
    ) {
      return 0;
    }
    grid[r][c] = 0;
    return (
      1 + Area(r + 1, c) + Area(r - 1, c) + Area(r, c + 1) + Area(r, c - 1)
    );
  }
};
