/**
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/

var numIslands = function(grid) {
  if (grid.length === 0) return 0;
  let count = 0,
    rl = grid.length,
    cl = grid[0].length;

  const dfs = (r, c) => {
    if (r < 0 || c < 0 || r >= rl || c >= cl) return;
    if (grid[r][c] == "1") {
      grid[r][c] = "0";
      dfs(r - 1, c);
      dfs(r + 1, c);
      dfs(r, c - 1);
      dfs(r, c + 1);
    }
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        dfs(i, j);
        count++;
      }
    }
  }

  return count;
};
