// There are N students in a class. Some of them are friends, while some are not. Their friendship is transitive in nature. For example, if A is a direct friend of B, and B is a direct friend of C, then A is an indirect friend of C. And we defined a friend circle is a group of students who are direct or indirect friends.

// Given a N*N matrix M representing the friend relationship between students in the class. If M[i][j] = 1, then the ith and jth students are direct friends with each other, otherwise not. And you have to output the total number of friend circles among all the students.

// Example 1:
// Input: 
// [[1,1,0],
//  [1,1,0],
//  [0,0,1]]
// Output: 2
// Explanation:The 0th and 1st students are direct friends, so they are in a friend circle. 
// The 2nd student himself is in a friend circle. So return 2.
// Example 2:
// Input: 
// [[1,1,0],
//  [1,1,1],
//  [0,1,1]]
// Output: 1
// Explanation:The 0th and 1st students are direct friends, the 1st and 2nd students are direct friends, 
// so the 0th and 2nd students are indirect friends. All of them are in the same friend circle, so return 1.


// Method 1: DfS: O(n*n) O(n)
var findCircleNum = function(M) {
    if(M.length === 0) return 0
    let count = 0,
        visited = new Array(M.length).fill(false)

    for(let i = 0; i< M.length; i++){
        if(!visited[i]){
            find(i)
            count++
        }
    }
    
    return count
    
    function find(i){
        visited[i] = true
        for(let j = 0; j < M.length; j++){
            if(i !== j && !visited[j] && M[i][j] === 1){
                find(j)
              }
        }
    }
};

var findCircleNum = function(M) {
    
    if(M.length === 0) return 0
    let count = 0
    for(let i = 0; i< M.length; i++){
        count = count + find(i) 
    }
    
    return count
    
    function find(i){
        if(M[i][i] ===1) {
            M[i][i] = 0
            for(let j = 0; j < M.length; j++){
                if(M[i][j] === 1){
                    M[i][j] = 0
                    M[j][i] = 0
                    find(j)
                }
            }
            return 1
        }else return 0
    }
};

// Method 2: Union find O(n*n) O(n)






