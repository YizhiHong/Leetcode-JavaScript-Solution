/**
Given a 2D integer matrix M representing the gray scale of an image, you need to design a smoother to make the gray scale of each cell becomes the average gray scale (rounding down) of all the 8 surrounding cells and itself. If a cell has less than 8 surrounding cells, then use as many as you can.

Example 1:
Input:
[[1,1,1],
 [1,0,1],
 [1,1,1]]
Output:
[[0, 0, 0],
 [0, 0, 0],
 [0, 0, 0]]
Explanation:
For the point (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
For the point (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
For the point (1,1): floor(8/9) = floor(0.88888889) = 0

 * @param {number[][]} M
 * @return {number[][]}

 time: O(M*N) space: O(M*N)
 */
var imageSmoother = function(M) {
    let res = [],
        row_len = M.length,
        col_len = M[0].length
    
    let getSum = (r,c) => {
        let sum = 0, count= 0
        for(let i = r - 1; i < r + 2 ;i++){
            for(let j = c - 1; j < c + 2 ;j++){
                if(i >= 0 && i < row_len && j >= 0 && j < col_len) {
                    sum = sum + M[i][j] 
                    count++
                }
            } 
        }
        return ~~(sum/count)
    }
    
    for(let row = 0; row < row_len; row++){
        res.push([])
        for(let col = 0; col < col_len; col++){
            res[row].push(getSum(row,col))
        }
    }
    return res
};



/**
test: constant space, time: O(M*N) space: O(1)
 */
const imageSmoother = M => {
    let rows = M.length, cols = M[0].length;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let neighbors = 0, v = 0;
            for (let i = Math.max(0, r - 1); i <= Math.min(rows - 1, r + 1); i++) {
                for (let j = Math.max(0, c - 1); j <= Math.min(cols - 1, c + 1); j++) {
                    neighbors++;
                    v += (M[i][j] & 0b11111111);
                }
            }
            M[r][c] += (v / neighbors | 0) << 8;
        }
    }
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            M[r][c] >>= 8;
        }
    }
    return M;
};


