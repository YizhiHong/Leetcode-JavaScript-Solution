/***
Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.
 

For example:
Given BST [1,null,2,2],

   1
    \
     2
    /
   2
 

return [2].

Note: If a tree has more than one mode, you can return them in any order.

Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).
*/

// Solution 1: O(n) O(n)
var findMode = function(root) {
    let res = new Map()
    let travel = (curr) => {
        if(curr === null) return;
        if(res.has(curr.val)){
            res.set(curr.val, res.get(curr.val)+1)
        }else{
            res.set(curr.val, 1)
        }
        travel(curr.left,curr)
        travel(curr.right,curr)
    }
    travel(root)
    let maxOccur = Math.max(...res.values())
    let arr = new Set()
    res.forEach(function(value, key) {
      if(value === maxOccur) arr.add(key)
    });
    return Array.from(arr)
};




