/**
For example, F(3,7)F(3, 7)F(3,7), the number of unique BST tree with the number 3 as its root. To construct an unique BST out of the entire sequence [1, 2, 3, 4, 5, 6, 7] with 3 as the root, which is to say, we need to construct a subtree out of its left subsequence [1, 2] and another subtree out of the right subsequence [4, 5, 6, 7], and then combine them together (i.e. cartesian product). Now the tricky part is that we could consider the number of unique BST out of sequence [1,2] as G(2)G(2)G(2), and the number of of unique BST out of sequence [4, 5, 6, 7] as G(4)G(4)G(4). For G(n)G(n)G(n), it does not matter the content of the sequence, but the length of the sequence. Therefore, F(3,7)=G(2)⋅G(4)F(3,7) = G(2) \cdot G(4)F(3,7)=G(2)⋅G(4). To generalise from the example, we could derive the following formula:

F(i,n)=G(i−1)⋅G(n−i)(2) F(i, n) = G(i-1) \cdot G(n-i) \qquad \qquad (2) F(i,n)=G(i−1)⋅G(n−i)(2)

By combining the formulas (1), (2), we obtain a recursive formula for G(n)G(n)G(n), i.e.

G(n)=∑i=1nG(i−1)⋅G(n−i)(3) G(n) = \sum_{i=1}^{n}G(i-1) \cdot G(n-i) \qquad \qquad (3) G(n)=​i=1​∑​n​​G(i−1)⋅G(n−i)(3)


*/

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  let res = new Array(n + 1).fill(0);
  res[0] = 1;
  res[1] = 1;

  for (let i = 2; i < n + 1; i++) {
    for (let j = 1; j < i + 1; j++) {
      res[i] += res[j - 1] * res[i - j];
    }
  }

  return res[n];
};
