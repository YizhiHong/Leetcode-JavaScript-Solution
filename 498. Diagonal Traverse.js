/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    if(matrix === []) return matrix
    
    let i=0, j=0, 
        M = matrix.length, N = matrix[0].length, 
        flag = true;
    
    let res = new Array(M+N-1).fill(null),
        tr = []

    for(let m = 0; m <= M-1; m++){
        for(let n = 0; n <= N-1; n++){
            if(res[m+n] === null) res[m+n] = []
            res[m+n].push(matrix[m][n])
        }
    }
    
    for(let m = 0; m <= res.length - 1; m++){
        if(m%2===0) {
            tr.push(...res[m])
        }else{
            tr.push(...(res[m].reverse()))
        }
    }
    return tr
};