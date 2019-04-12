/**
 * @param {number} n
 * @return {string[][]}
 */
class Chessboard{
    constructor(n){
        this.board = new Array(n).fill(-1)
        this.size = n
    }
    isSafe(col){
        let board = this.board
        for (let i = 0; i < col; i++){
            if(Math.abs(board[i]-board[col]) === col-i || board[i] === board[col]){
                return false
            }   
        }
        return true
    }
    insert(row,col){
        this.board[col] = row
    }
}

var solveNQueens = function(n) {
    // 
    let res = [],
        cb = new Chessboard(n)
    
    backtrack(0,[],n)
    
    function backtrack(col,path,size){
        // if the solution size reach the n
        if(col >= size){
            res.push([...path])
        }else{
            for(let row = 0; row < size; row++){
                cb.insert(row,col)
                if(cb.isSafe(col)){
                    let tmp = new Array(size).fill('.')
                    tmp.splice(row,1,'Q')
                    backtrack(col+1,[...path,tmp.join("")],size)
                }
            }
        }
    }
    return res
};