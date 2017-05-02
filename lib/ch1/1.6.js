// Given an image represented by an NxN matrix, where each pixel in the
// image is 4 bytes, write a method to rotate the image by 90 degrees
// Can you do this in place?


const rotateMatrix90 = matrix => {
  const len = matrix.length;
  const mid = Math.floor(len / 2);

  for (let i = 0; i < mid; i++) {
    const last = len - i - 1;
    for (let j = i; j < last; j++) {
      const offset = j - i;
      const top = matrix[i][j];

      // left -> top
      matrix[i][j] = matrix[last - offset][i];
      // bot -> left
      matrix[last - offset][i] = matrix[last][last - offset];
      // right -> bot
      matrix[last][last - offset] = matrix[j][last];
      // top -> right
      matrix[j][last] = top;
    }
  }

  return matrix;
};
