/**
 * Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

Note that the row index starts from 0.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 3
Output: [1,3,3,1]
Follow up:

Could you optimize your algorithm to use only O(k) extra space?
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if(rowIndex <= 0) return [1]
  if(rowIndex == 1) return [1,1]
  
  let row,
      curr = new Array(2).fill(1)
  
  for (let i = 1; i < rowIndex+1; i++){
      row = curr
      curr = new Array(row.length+1).fill(1)
      for(let j = 1; j < curr.length - 2; j++){
          curr[j] = row[j -1]+row[j]
      }
  }
  curr.pop()
  return curr
};