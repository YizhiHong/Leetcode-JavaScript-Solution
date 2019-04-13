/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

// DFS O(n) O(n) 
var floodFill = function(image, sr, sc, newColor) {
    let currColor = image[sr][sc]
    if (currColor === newColor) return image
    
    const dfs = (r, c, color, newC = newColor) =>{
        if(image[r][c] === color){
            image[r][c] = newC
            if(r >= 1) dfs(r-1, c, color) 
            if(r + 1 < image.length) dfs(r+1, c, color)
            if(c >= 1) dfs(r, c-1, color) 
            if(c + 1 < image[0].length) dfs(r, c+1, color) 
        }
    }
    
    dfs(sr,sc, currColor, newColor)
    
    return image
};

// BFS O(n) O(n)
var floodFill = function(image, sr, sc, newColor) {
    let currColor = image[sr][sc]
    if (currColor === newColor) return image
    
    let stack = [[sr,sc]]
    
    while(stack.length > 0) {
        let [r,c] = stack.pop()
        if(image[r][c] === currColor){
            image[r][c] = newColor
            if(r+1 < image.length) stack.push([r+1,c])
            if(c+1 < image[0].length) stack.push([r,c+1])
            if(r >= 1) stack.push([r-1,c])
            if(c >= 1) stack.push([r,c-1])
        }
    }

    return image
};