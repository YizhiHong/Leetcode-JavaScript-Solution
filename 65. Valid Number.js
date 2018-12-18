/**
 * @param {string} s
 * @return {boolean}
 */
 /**
  solution 1: build in
 */
const isNumber = s => {
    s = s.trim()
    return s && !isNaN(new Number(s))
};
 /**
  solution 2: reg expression
 */
 const isNumber = function(s) {
    return /^[+-]?([0-9]+\.?([0-9]+)?|(\.[0-9]+))(e[+-]?[0-9]+)?$/.test(s.trim())
};

/** my solution: state base(DFA)
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    /**
    state base approch
        -> s1
     s0 -> s2 -
        -> s3
    **/
    let state = {
        0: {" ":0,"sign":1,"digit":2,".":3,"valid":false},
        
        1: {"digit":2,".":3,"valid":false}, // when first sign
        
        2: {"digit":2,".":5,"e":4," ":8,"valid":true}, // when first digit
        
        3: {"digit":5,"valid":false}, // when first .
        
        4: {"sign":6,"digit":7,"valid":false}, //when it is "e" ahead
        
        5: {" ":8,"digit":5,"e":4,"valid":true}, //when it is number number or 123.
        
        6: {"digit":7,"valid":false},
        
        7: {" ":8,"digit":7,"valid":true},
        
        8: {" ":8,"valid":true},
    }, currState = 0;
    
    for (let str of s.split("")){
        if(str === "+" || str === "-"){
            str = "sign"
        }
        if(str === "."){
            str = "."
        }
        if( Number(str) >= 0 && Number(str) <= 9 && str !== " "){
            str = "digit"
        }
        if(!(str in state[currState])){
            return false
        }
        currState = state[currState][str]
    }
    // console.log(currState)
    return state[currState]["valid"]
    
};