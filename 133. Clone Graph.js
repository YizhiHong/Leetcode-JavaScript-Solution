/**
Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph. Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.
*/

/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  let hashMap = new Map();

  return dfs(node, [], null);

  function dfs(target) {
    if (target === null) return null;

    if (hashMap.has(target.val)) return hashMap.get(target.val);

    let clone = new Node(target.val, []);
    hashMap.set(clone.val, clone);

    for (let n of target.neighbors) {
      clone.neighbors.push(dfs(n));
    }

    return clone;
  }
};
