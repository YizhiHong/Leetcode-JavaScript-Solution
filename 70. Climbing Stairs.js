/**
 Brute Force: TC:O(2^n) SC:O(n)
 T(n) = T(n-1) + T(n-2)
*/
var climbStairs = function(n) {
    
    if (n === 0) return 1
    
    var climb = function(i,stairs){
        if(i > stairs) return 0
        if(i == stairs) return 1
        return climb(i+1,stairs) + climb(i+2,stairs)
    }
    let count = climb(0,n)
    return count
};

/**
 DP: TC:O(n) SC:O(n)
 dp[i] = dp[i-1] + dp[i-2]
*/

var climbStairs = function(n) {
    
    if (n <= 1) return 1
    
    let dp = new Array(n+1)
    dp[0] = 1
    dp[1] = 1
    
    for (let i = 2; i< n+1; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    
    return dp[n]
};

/**
FIB: TC:O(n) SC:O(1)
FIB(n) = FIB(n-1) + FIB(n-2)
 */

var climbStairs = function(n) {
    
    if (n <= 1) return 1
    
    let fb = 1
    let fb1 = 1
    let result = 0
    
    for (let i = 2; i< n+1;i++){
        result = fb + fb1
        fb = fb1
        fb1 = result
    }
    
    return result
};