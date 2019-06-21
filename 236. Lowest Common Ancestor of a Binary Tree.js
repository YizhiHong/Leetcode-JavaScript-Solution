var lowestCommonAncestor = function(root, p, q) {
  let path_p = [];
  let path_q = [];

  const hasPath = (curr, path, node) => {
    if (curr === null) return false;

    path.push(curr);
    if (curr.val === node.val) {
      return true;
    }
    if (hasPath(curr.left, path, node) || hasPath(curr.right, path, node)) {
      return true;
    }
    path.pop();
    return false;
  };
  hasPath(root, path_p, p);
  hasPath(root, path_q, q);
  let len = path_p.length > path_q.length ? path_q.length : path_p.length;

  for (let i = 1; i < len; i++) {
    if (path_p[i].val !== path_q[i].val) {
      return path_p[i - 1];
    }
  }

  return path_p[len - 1];
};

var lowestCommonAncestor = function(root, p, q) {
  if (!root || root === p || root === q) return root;

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (!left) {
    return right;
  } else if (!right) {
    return left;
  } else {
    return root;
  }
};

var lowestCommonAncestor = function(root, p, q) {
  if (!root || root === p || root === q) return root;
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  return !left ? right : !right ? left : root;
};
