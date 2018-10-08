/**

ou are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. 
Grid cells are connected horizontally/vertically (not diagonally). 
The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). 
The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. 
The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Answer: 16
Explanation: The perimeter is the 16 yellow stripes in the image below:
 */


/**  O(MxN) just like dynamic programming */ 
var islandPerimeter = function(grid) {
    if (grid === []) return 0
    let total = 0
    let m = grid.length, n = grid[0].length
    let curr,down,right;
    for (let i = 0; i< m; i++){
        for(let j = 0; j < n; j++){
            curr = grid[i][j]
            down = i === m - 1 ? 0 : grid[i+1][j]  // if rich edge element set as 0
            right = j === n - 1 ? 0 : grid[i][j+1] // Since if curr = 1, total++
            if( down ^ curr === 1){
                total++
            }
            if( curr ^ right === 1 ){
                total++
            }
            if(curr === 1 ){
                if(i === 0) total++
                if(j === 0) total++
            }
        }
    }
    return total