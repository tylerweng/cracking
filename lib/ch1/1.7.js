// Write an algorithm such that if an element in an MxN matrix is 0,
// its entire row and column is set to 0.

const zerofy = matrix => {
  const m = matrix.length;
  const n = matrix[0].length;
  const zeroRows = new Set();
  const zeroCols = new Set();

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        zeroRows.add(i);
        zeroCols.add(j);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (zeroRows.has(i) || zeroCols.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};

module.exports = zerofy;
