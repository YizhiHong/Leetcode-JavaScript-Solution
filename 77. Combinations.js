/**
Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

Example:

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let arr = new Array(n)
    for(let i = 0; i< arr.length; i++){
        arr[i] = i + 1
    }
    let res = []
    
    dfs([], k, 1, n-k+1)
    
    function dfs(comb, rest, start, end){
        if(rest === 0){
            res.push([...comb])
        }else{
            for(let i = start; i<= end; i++){
                comb.push(i)
                dfs(comb, rest - 1, i+1 ,end + 1)
                comb.pop()
            }
        }
    }
    
    return res
};