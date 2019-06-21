/**
	Given an array of integers, find out whether there are two distinct indices i and j in the array such that the absolute difference between nums[i] and nums[j] is at most t and the absolute difference between i and j is at most k.

	Example 1:

	Input: nums = [1,2,3,1], k = 3, t = 0
	Output: true
	Example 2:

	Input: nums = [1,0,1,1], k = 1, t = 2
	Output: true
	Example 3:

	Input: nums = [1,5,9,1,5,9], k = 2, t = 3
	Output: false
 */

/** solution 1: bucket O(n) O(k)
	ref:https://www.youtube.com/watch?v=yc4hCFzNNQc
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  if (nums.length === 0 || k < 1 || t < 0) return false;

  let bucket = new Map(),
    bucketSize = t + 1,
    min = Math.min(...nums);

  for (let i = 0; i < nums.length; i++) {
    let index = ~~((nums[i] - min) / bucketSize);

    // check current and its neigbors
    if (bucket.has(index)) return true;
    if (bucket.has(index - 1) && nums[i] - bucket.get(index - 1) <= t)
      return true;
    if (bucket.has(index + 1) && bucket.get(index + 1) - nums[i] <= t)
      return true;

    //add to the bucket
    bucket.set(index, nums[i]);

    //remove the index out of k
    if (i - k >= 0) {
      bucket.delete(~~((nums[i - k] - min) / bucketSize));
    }
  }
  return false;
};

/** solution 2: binary search tree -> no provided in es6, prefer to use java TreeSet
 	O(nlogk) O(k)

 	ref: leetcode others solution
 */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

var insertIntoBST = function(root, val) {
  if (root === null) {
    return new _____1.TreeNode(val);
  }
  let node = root;
  while (node) {
    if (node.value > val) {
      if (node.left === null) {
        node.left = new TreeNode(val);
        break;
      } else {
        node = node.left;
      }
    }
    if (node.value < val) {
      if (node.right === null) {
        node.right = new TreeNode(val);
        break;
      } else {
        node = node.right;
      }
    }
  }
  return root;
};

const deleteNode = function(root, key) {
  if (root === null) {
    return null;
  }
  if (root.value > key) {
    //寻找结点
    root.left = deleteNode(root.left, key);
  } else if (root.value < key) {
    root.right = deleteNode(root.right, key);
  } else {
    if (root.left !== null && root.right !== null) {
      let leftMax = root.left;
      while (leftMax.right) {
        leftMax = leftMax.right;
      }
      root.value = leftMax.value;
      root.left = deleteNode(root.right, leftMax.value);
    } //寻找左树最大值替换根结点
    else {
      return root.left === null ? root.right : root.left;
    } //如果是单子树的结点，返回结点，叶节点返回null;
  }
  return root;
};

var containsNearbyAlmostDuplicate = function(nums, k, t) {
  if (t < 0 || k <= 0) {
    return false;
  }
  let root = new TreeNode(nums[0]);
  let cnt = 1;
  const findNear = function(root, value, t) {
    if (root === null) {
      return false;
    }
    let dist = Math.abs(root.value - value);
    if (dist <= t) {
      return true;
    } else if (value > root.value) {
      return findNear(root.right, value, t);
    } else {
      return findNear(root.left, value, t);
    }
  }; //找到二叉搜索树中的最小差值,如果这个差值小于等于t,就是存在i,j
  for (let i = 1; i < nums.length; i++) {
    if (findNear(root, nums[i], t)) {
      return true;
    }
    root = insertIntoBST(root, nums[i]);
    cnt++;
    if (cnt === k + 1) {
      root = deleteNode(root, nums[i - k]);
      cnt--;
    }
  }
  return false;
};
