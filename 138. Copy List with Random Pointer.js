
/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
/** method 1: recursive O(n) O(n) */
var copyRandomList = function(head) {

  const visited = new Map() // make sure no copies of the same node
  return _copyRandomList(head)
  
  function _copyRandomList(node){
      if (node === null) return null
      
      if (visited.has(node)){
          return visited.get(node)
      }
      let newNode = new Node(node.val, null, null)
      visited.set(node, newNode)
      newNode.next = _copyRandomList(node.next)
      newNode.random = _copyRandomList(node.random)
      return newNode
  }    
};