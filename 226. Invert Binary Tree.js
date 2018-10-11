/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
	if(root === null){
		return null
	}
	let left = invertTree(root.left) 
	let right = invertTree(root.right) 
	root.left = right
	root.right = left
	return root
};

/**
DFS Iterative
 */
var invertTree = function(root) {
    if(root === null) return null
    
	let stack = [],
        curr = root,
        temp = null
    
    stack.push(root)
    
    while(stack.length > 0){
        curr = stack.pop()
        temp = curr.left
        curr.left = curr.right
        curr.right = temp
        
        if(curr.left !== null) stack.push(curr.left)
        if(curr.right !== null) stack.push(curr.right)
        
    }
    return root
    
};