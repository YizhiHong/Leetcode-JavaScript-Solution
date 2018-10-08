/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var uniquePaths = function(m, n) {
    let vector = new Array(m).fill(1);

    for (let i = 1; i<n ;i++){
    	for (let j = 1; j <m;j ++){
    		vector[j] = vector[j] + vector[j-1]
    	}
    }
    return vector[m-1]
};

console.log(uniquePaths(4,3))