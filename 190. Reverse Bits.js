/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
/** My method */
var reverseBits = function(n) {
    let ba = new Array(32).fill(0)
    let i = 0
    while(n >= 1){
        let Remainder = n & 1 // ===> n%2
        ba[31-(i++)] = Remainder 
        n = n>>>1
    }
    let binary = ba.reverse().join("")
    return parseInt(binary,2)
}

/** method 3 <BEST> */
var reverseBits = function(n) {
    if(n === 0) return 0
    let res = 0
    
    for (let i = 0; i < 32 ; i++){
        res = res << 1
        res = res + (n & 1) // == > n % 2
        n = n >> 1
    }
    return res >>> 0
};

/** method 1 */
var reverseBits = function(n) {
    let x=n.toString(2);
    x = x.split('').reverse().join('').padEnd(32,'0');
    return parseInt(x,2);
};


/** method 2 */
var reverseBits = function(n) {
    if(n){
        n = (n >>> 16) | (n << 16);
        n = ((n & 0xff00ff00) >>> 8) | ((n & 0x00ff00ff) << 8);
        n = ((n & 0xf0f0f0f0) >>> 4) | ((n & 0x0f0f0f0f) << 4);
        n = ((n & 0xcccccccc) >>> 2) | ((n & 0x33333333) << 2);
        n = ((n & 0xaaaaaaaa) >>> 1) | ((n & 0x55555555) << 1);
        //abcdefgh -> efghabcd -> ghefcdab -> hgfedcba
        n = n >>>0; //for js...
    }
    return n;
};