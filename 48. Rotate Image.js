/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // i,j -> j,(size-i)
    // 00 -> 02 -> 22 -> 20 -> 00
    // 01 -> 12 -> 21 -> 10 -> 01
    
    let prev = null,
        temp = null,
        size = matrix.length - 1
    if (size === 0 || matrix === []) return;
    
    for(let start = 0; start <= size/2;start++){
        let i = start
        for(let j = start; j<=size-start-1; j++){
            prev = matrix[i][j]
            for(let c = 0; c<= 3; c++){
                temp = matrix[j][size-i]
                matrix[j][size-i] = prev
                prev = temp
                let t = i
                i = j
                j = size-t
            }
            i = start
        }
    }
    
};
// better way(copy from leetcode)
var rotate = function(matrix) {
    
    for(let i = 0; i <= Math.floor(matrix.length/2); i++) {
        for(let j = i; j < matrix.length - 1 - i; j++) {
            let length = matrix.length
            
            let tmp = matrix[i][j]
            matrix[i][j] = matrix[length-1-j][i]
            matrix[length-1-j][i] = matrix[length-1-i][length-1-j]
            matrix[length-1-i][length-1-j] = matrix[j][length-1-i]
            matrix[j][length-1-i] = tmp
        }
    }

    
};