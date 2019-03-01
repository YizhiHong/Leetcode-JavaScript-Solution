// In the "100 game," two players take turns adding, to a running total, any integer from 1..10. The player who first causes the running total to reach or exceed 100 wins.

// What if we change the game so that players cannot re-use integers?

// For example, two players might take turns drawing from a common pool of numbers of 1..15 without replacement until they reach a total >= 100.

// Given an integer maxChoosableInteger and another integer desiredTotal, determine if the first player to move can force a win, assuming both players play optimally.

// You can always assume that maxChoosableInteger will not be larger than 20 and desiredTotal will not be larger than 300.

// Example

// Input:
// maxChoosableInteger = 10
// desiredTotal = 11

// Output:
// false

// Explanation:
// No matter which integer the first player choose, the first player will lose.
// The first player can choose an integer from 1 up to 10.
// If the first player choose 1, the second player can only choose integers from 2 up to 10.
// The second player will win by choosing 10 and get a total = 11, which is >= desiredTotal.
// Same with other integers chosen by the first player, the second player will always win.

//bestWay O(2^n) O(2^n)
var canIWin = function(maxChoosableInteger, desiredTotal) {
    
    let sum = maxChoosableInteger * (maxChoosableInteger + 1)/2
    
    const memo = new Uint8Array(1 << maxChoosableInteger)

    if(sum < desiredTotal) return false
    else if(desiredTotal < maxChoosableInteger) return true
    
    return _canIWin(maxChoosableInteger,desiredTotal,0)
    
    function _canIWin(M,T,state){
        //base case, if oppenent reach the total already
        if(T <= 0) return false
        if(memo[state] !== 0) return memo[state] === 1 //if we reached the combination before
        for(let i = 0; i < M; ++i){
            if(state & 1<<i) continue//if current state has been used
            if(!_canIWin(M,T - i - 1, state | 1<<i)) {
                memo[state] = 1
                return true
            }
        }
        memo[state] = -1 
        return false   
    }
};


/**
O(2^n)
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
    
    const picked = new Array(maxChoosableInteger).fill(false)
    const memo = {}
    
    if(maxChoosableInteger * (maxChoosableInteger + 1)/2 < desiredTotal) return false
    else if(desiredTotal <= maxChoosableInteger) return true
    
    return _canIWin(picked,desiredTotal)
    
    function _canIWin(P,T){
        //base case, if oppenent reach the total already
        if(T <= 0) return false
        let key = P.toString()
        if(memo[key]) return memo[key] //if we reached the combination before
        
        for(let i = 1; i <= maxChoosableInteger; i++){
            if(P[i]) continue//if current state has been used
            P[i] = true
            // if win here or oppennet does not win next
            if(T - i <= 0 || !_canIWin(P,T - i) ) {
                P[i] = false
                memo[key] = true
                return true
            }
            P[i] = false
        }
        memo[key] = false
        return false   
    }
};


