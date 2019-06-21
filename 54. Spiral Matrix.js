/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length === 0) return [];
  let row_len = matrix.length,
    column_len = matrix[0].length;

  let result = [],
    size = row_len * column_len;
  (r = 0), (c = 0), (s = 0), (e = 0), (count = 0), (horizontal = 0); // 0,1,2,3 -> right, down, left, up

  while (count < size) {
    result.push(matrix[r][c]);
    switch (horizontal) {
      case 0: // right
        c++;
        if (c >= column_len - 1) {
          horizontal = 1;
          column_len--;
          if (c > column_len) {
            c = 0;
            r++;
          } // if [[1],[2]] occur
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
          } // if [[1],[2]] occur
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
