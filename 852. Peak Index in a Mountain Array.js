/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  let start = 0;
  let end = A.length - 1;

  while (start < end) {
    let mid = ~~((start + end) / 2);
    if (A[mid] > A[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
};
