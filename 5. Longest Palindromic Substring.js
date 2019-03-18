/**
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
 */

// dp O(n^2) O(n^2) 
var longestPalindrome = function(s) {
    let dp = new Array(s.length).fill(new Array(s.length)),
        res = ""
    
    for (let i = 0; i < s.length; i++){
        for(let j = 0; j <= i; j++){
            dp[i][j] = s.charAt(i) === s.charAt(j) && ( j + 1 >= i- 1 || dp[i-1][j+1])
            if(dp[i][j] && i - j + 1 > res.length){
                res = s.substring(j,i+1)
            }
        }
    }

    return res
};

// dp O(n^2) O(1)