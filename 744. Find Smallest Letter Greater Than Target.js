/**
Given a list of sorted characters letters containing only lowercase letters, and given a target letter target, 
find the smallest element in the list that is larger than the given target.

Letters also wrap around. For example, if the target is target = 'z' and letters = ['a', 'b'], the answer is 'a'. 

Input:
letters = ["c", "f", "j"]
target = "a"
Output: "c"

Input:
letters = ["c", "f", "j"]
target = "c"
Output: "f"

Input:
letters = ["c", "f", "j"]
target = "d"
Output: "f"

Input:
letters = ["c", "f", "j"]
target = "g"
Output: "j"

Input:
letters = ["c", "f", "j"]
target = "j"
Output: "c"

Input:
letters = ["c", "f", "j"]
target = "k"
Output: "c"
*/
var nextGreatestLetter = function(letters, target) {
    let mid
    let start = 0,
        end = letters.length - 1
    
    while (start <= end){
        mid = ~~((end + start)/2)
        if(letters[mid].charCodeAt(0) > target.charCodeAt(0)){
            end = mid - 1
        }else{
            start = mid + 1
        }
    }
    
    return letters[start%(letters.length)]
};

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let mid
    let start = 0,
        end = letters.length
    
    while (start < end){
        mid = start +  ~~((end - start)/2)
        if(letters[mid].charCodeAt(0) > target.charCodeAt(0)){
            end = mid
        }else{
            start = mid + 1
        }
    }
    return letters[start%(letters.length)]
};