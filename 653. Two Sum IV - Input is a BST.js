/**
Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.

Example 1:

Input: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 9

Output: True
 

Example 2:

Input: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 28

Output: False
*/

//O(n) O(n)
var findTarget = function(root, k) {
    let map = new Set(), flag = false
    
    const inorder = (curr) => {
        if (!curr) return
        inorder(curr.left)
        if(map.has(curr.val)){
            flag = true
        }else{
            map.add(k - curr.val)
        }
        inorder(curr.right)
    }
    inorder(root)
    return flag ? true : false    
};