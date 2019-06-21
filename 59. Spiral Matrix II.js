/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let size = n ** 2,
    result = [];

  for (let i = 0; i < n; i++) {
    result.push(new Array(n).fill(0));
  }

  let r = 0,
    c = 0,
    s = 0,
    e = 0,
    count = 1,
    column_len = n,
    row_len = n,
    horizontal = 0; // 0,1,2,3 -> right, down, left, up

  while (count <= size) {
    result[r][c] = count;

    switch (horizontal) {
      case 0: // right
        c++;
        if (c >= column_len - 1) {
          horizontal = 1;
          column_len--;
          if (c > column_len) {
            c = 0;
            r++;
          }
        }
        break;
      case 1: // down
        r++;
        if (r >= row_len - 1) {
          horizontal = 2;
          row_len--;
          if (r > row_len) {
            r = 0;
            c++;
          }
        }
        break;
      case 2: // left
        c--;
        if (c === s) {
          (horizontal = 3), e++;
        }
        break;
      case 3: // up
        r--;
        if (r === e) {
          (horizontal = 0), s++;
        }
        break;
    }

    count++;
  }

  return result;
};
