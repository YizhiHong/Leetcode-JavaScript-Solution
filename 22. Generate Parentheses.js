/**
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

var generateParenthesis = function(n) {
    let res = []
    backtrack()
    
    function backtrack(str = "", open = 0, close = 0){
        if(str.length === n*2){
            res.push(str)
        }else{
            if(open < n){
                backtrack(str +"(", open+1,close)
            }
            if(close < open){
                backtrack(str +")", open,close+1)
            }
        }
        
    }
    return res
};