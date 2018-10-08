/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let result = ""
    
    let helper = (curr,str) =>{
        if(curr === null) {
            str = str + "null,"
        }else{
            str = str + curr.val + ","
            str = helper(curr.left,str)
            str = helper(curr.right,str)
        }
        return str
    }
    result = helper(root,result)
        
    return result
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let nodes = data.split(",")
    
    let helper = (nodeList,curr) =>{
        curr = nodeList.shift()
        if(curr === 'null') {
            curr = null
        }else{
            curr = new TreeNode(Number(curr))
            
            curr.left = helper(nodeList,curr)
            curr.right = helper(nodeList,curr)
        }
        return curr
    }
    
    let root = helper(nodes,null)
    
    return root
    
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */