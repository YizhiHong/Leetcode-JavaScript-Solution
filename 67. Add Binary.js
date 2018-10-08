var addBinary = function(a, b) {
    a = a.split('')
    b = b.split('')
    let ret = ""
    let [carry, i, j] = [0, a.length - 1, b.length - 1]

    while ( i >= 0 || j >=0){
    	let sum = carry
    	sum += i >= 0 ? Number(a[i--]) :0 
    	sum += j >= 0 ? Number(b[j--]) :0 
    	ret = String(sum%2) + ret
    	carry = ~~(sum/2) 
    }

    if (carry === 1){
    	ret = carry + ret
    }

}

addBinary('11','11')