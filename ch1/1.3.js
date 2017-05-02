// Design an algorithm and write code to remove the duplicate characters
// in a string without using any additional buffers NOTE: One or two
// additional variables are fine An extra copy of the array is not.
// FOLLOW UP
// Write the test cases for this method

const removeDuplicates = str => {
  const set = new Set();
  let withoutDups = "";

  for (let i = 0; i < str.length; i++) {
    if (!set.has(str[i])) {
      set.add(str[i]);
      withoutDups += str[i];
    }
  }

  return withoutDups;
};
