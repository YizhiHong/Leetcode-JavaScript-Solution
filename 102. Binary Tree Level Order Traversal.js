/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) return []
    
    let result = []
    let curr = root
    let queue = []
    
    queue.push(curr)

    while (queue.length > 0){     
        let len = queue.length

        let row = new Array(len)
        
        while (len > 0) {
            curr = queue[0]
            if(curr.left !== null) {
                queue.push(curr.left)
            }
            if(curr.right !== null){
                queue.push(curr.right)
            }
            queue.shift()
            row[row.length-len] = curr.val
            
            len--
        }        
        result.push(row)        
    }
    return result
};

var levelOrder = function(root) {
    if (root === null) return []
    let res = []
    
    let dfs = (arr,curr,level) => {
        if(curr === null) return
        if(arr.length <= level) arr.push(new Array(0))
        dfs(arr,curr.left,level+1)
        dfs(arr,curr.right,level+1)
        arr[level].push(curr.val)
    }
    
    dfs(res,root,0)
    return res
};
