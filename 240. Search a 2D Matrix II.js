/**
 * Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
Example:

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false.
 */

// Method 1: two pointer searching O(n+m) O(1)
var searchMatrix = function (matrix, target) {
  let col = 0,
    row = matrix.length - 1
  while (row >= 0 && col < matrix[0].length) {
    if (matrix[row][col] > target) {
      row--
    } else if (matrix[row][col] < target) {
      col++
    } else {
      return true
    }
  }
  return false
};

//or
var searchMatrix = function(matrix, target) { 
  if (matrix.length === 0) return false
  let col = matrix[0].length-1, row = 0
  while( row < matrix.length && col >= 0 ){
      if(matrix[row][col] > target){
          col-- 
      }else if(matrix[row][col] < target ){
          row++
      }else{
          return true
      }
  }
  return false
};

// Method 2: Divide and Conquer O(nlgn) O(lgn)
