/**
Given two integer arrays A and B, return the maximum length of an subarray that appears in both arrays.

Example 1:
Input:
A: [1,2,3,2,1]
B: [3,2,1,4,7]
Output: 3
Explanation: 
The repeated subarray with maximum length is [3, 2, 1].
Note:
1 <= len(A), len(B) <= 1000
0 <= A[i], B[i] < 100
**/

/**
    DP solution: O(n^2) O(n^2)
*/

var findLength = function(A, B) {
    let dp = new Array(A.length)
    for(let i = 0;i < A.length;i++) dp[i] = new Array(B.length).fill(0)
    let max = 0

    for(let i = 0; i< A.length; i++){
        for(let j = 0; j< B.length; j++){
            if(A[i] === B[j]){
                if(i=== 0 || j === 0) dp[i][j] = 1
                else dp[i][j] = dp[i-1][j-1] + 1 
                if(max < dp[i][j]) max = dp[i][j]
            }
        }
    }
    
    
    return max
};

/**
    Binary search + hash Map: O( (N+M)*log(max(M,N)) ) O(M)
*/



