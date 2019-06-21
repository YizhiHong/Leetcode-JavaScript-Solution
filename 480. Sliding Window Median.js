/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// solution 1: insertion in sorted array.
// O((n-k+1)*k),  O(k)

var medianSlidingWindow = function(nums, k) {
  // sort the first window and apply to result
  let temp = nums.slice(0, k).sort((a, b) => a - b),
    res = [],
    median = null;

  const getMedian = function() {
    let mid = ~~(temp.length / 2);
    if (k % 2 === 0) {
      median = (temp[mid] + temp[mid - 1]) / 2;
    } else {
      median = temp[mid];
    }
  };
  // should use binary search to delete
  const deleteNum = function(val) {
    for (let i = 0; i < temp.length; i++) {
      if (val === temp[i]) {
        temp = temp.slice(0, i).concat(temp.slice(i + 1, temp.length));
        return;
      }
    }
  };
  // should use binary search to insert
  const addNum = function(val) {
    for (let i = 0; i < temp.length; i++) {
      if (val <= temp[i]) {
        temp.splice(i, 0, val);
        return;
      }
    }
    temp.push(val);
    return;
  };

  getMedian();
  res.push(median);

  for (let i = 1; i < nums.length - k + 1; i++) {
    deleteNum(nums[i - 1]);
    addNum(nums[i + k - 1]);
    getMedian();
    res.push(median);
  }

  return res;
};

/** solution 2: 2 heaps
    ref: from leetcode fastest js submittion
 */
var medianSlidingWindow = function(nums, k) {
  let minHeap = new HeapMap(),
    maxHeap = new HeapMap();
  minHeap.push(Infinity);
  maxHeap.push(Infinity);
  nums = nums.map((val, i) => {
    if (i >= k) {
      minHeap.remove(i - k);
      maxHeap.remove(i - k);
    }
    let min = minHeap.peek().val,
      max = -maxHeap.peek().val;
    val >= min ? minHeap.push(i, val) : maxHeap.push(i, -val);
    while (minHeap.size() - maxHeap.size() > 1) {
      let i = minHeap.pop().id;
      maxHeap.push(i, -nums[i]);
    }
    while (maxHeap.size() - minHeap.size() > 0) {
      let i = maxHeap.pop().id;
      minHeap.push(i, nums[i]);
    }
    return k % 2
      ? minHeap.peek().val
      : (minHeap.peek().val - maxHeap.peek().val) / 2;
  });
  return nums.slice(k - 1);
};
function HeapMap() {
  let heap = [],
    map = new Map();
  function Node(id, val) {
    this.id = id;
    this.val = val;
  }
  function swap(i, j) {
    const id1 = heap[i].id,
      id2 = heap[j].id;
    map.set(id1, j);
    map.set(id2, i);
    [heap[i], heap[j]] = [heap[j], heap[i]];
  }
  function bubbleUp(i) {
    if (!i || i >= heap.length) return;
    const parent = (i - 1) >> 1;
    if (heap[i].val < heap[parent].val) {
      swap(i, parent);
      bubbleUp(parent);
    }
  }
  function bubbleDown(parent) {
    const left = parent * 2 + 1,
      right = left + 1;
    if (parent >= heap.length || left >= heap.length) return;
    if (
      right < heap.length &&
      heap[right].val < heap[left].val &&
      heap[right].val < heap[parent].val
    ) {
      swap(parent, right);
      bubbleDown(right);
    } else if (heap[left].val < heap[parent].val) {
      swap(parent, left);
      bubbleDown(left);
    }
  }
  this.heap = heap;
  this.map = map;
  this.size = function() {
    return heap.length;
  };
  this.get = function(id) {
    return heap[map.get(id)];
  };
  this.has = function(id) {
    return map.has(id);
  };
  this.push = function(id, val = id) {
    const i = heap.length,
      node = new Node(id, val);
    heap.push(node);
    map.set(id, i);
    bubbleUp(i);
    return node;
  };
  this.peek = function() {
    return heap[0];
  };
  this.removeAt = function(i) {
    if (i >= heap.length) return null;
    let node = heap[i];
    swap(i, heap.length - 1);
    heap.pop();
    map.delete(node.id);
    bubbleUp(i);
    bubbleDown(i);
    return node;
  };
  this.remove = function(id) {
    if (!map.has(id)) return false;
    return this.removeAt(map.get(id));
  };
  this.pop = function() {
    return this.removeAt(0);
  };
  this.set = function(id, val) {
    if (!map.has(id)) return false;
    const i = map.get(id),
      node = heap[i];
    node.val = val;
    bubbleUp(i);
    bubbleDown(i);
    return node;
  };
}
