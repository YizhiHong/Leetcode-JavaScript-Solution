/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n <= 1) return 0
    const isPrimes = (k) => {
        for (let i = 2; i <= k**0.5 ; i++){
            if (k%i === 0) return false
        }
        return true
    }
    
    let count = 0
    for (let i = 2; i<n ;i++){
        if(isPrimes(i)) count ++
    }
    
    return count    
};

/**

https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

A prime number is a natural number that has exactly two distinct natural number divisors: 1 and itself.

To find all the prime numbers less than or equal to a given integer n by Eratosthenes' method:

    Create a list of consecutive integers from 2 through n: (2, 3, 4, ..., n).
    Initially, let p equal 2, the smallest prime number.
    Enumerate the multiples of p by counting to n from 2p in increments of p, and mark them in the list (these will be 2p, 3p, 4p, ...; the p itself should not be marked).
    Find the first number greater than p in the list that is not marked. If there was no such number, stop. Otherwise, let p now equal this new number (which is the next prime), and repeat from step 3.
    When the algorithm terminates, the numbers remaining not marked in the list are all the primes below n.
    Input: an integer n > 1.
 
     Let A be an array of Boolean values, indexed by integers 2 to n,
     initially all set to true.

     for i = 2, 3, 4, ..., not exceeding √n:
       if A[i] is true:
         for j = i2, i2+i, i2+2i, i2+3i, ..., not exceeding n:
           A[j] := false.

     Output: all i such that A[i] is true.
*/
var countPrimes = function(n) {
        
    if (n <= 2) return 0
    
    let sieve = new Array(n).fill(true);
    
    for (let i = 2; i < n**0.5 ; i++){
        if (sieve[i]) {
            for (let j = i**2 ; j < n; j = j + i) sieve[j] = false;
        }
    }
    // filter out first two true
    return sieve.filter((val) => val).length - 2
};


/** 
This algorithm produces all primes not greater than n. It includes a common optimization, which is to start enumerating the multiples of each prime i from i2. The time complexity of this algorithm is O(n log log n), provided the array update is an O(1) operation, as is usually the case. 
*/