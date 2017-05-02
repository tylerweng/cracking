// Implement an algorithm to determine if a string has all unique
// characters. What if you can not use additional data structures?

const allUniqueChars = str => {
  const set = new Set();
  for (let i = 0; i < str.length; i++) {
    if (set.has(str[i])) return false;
    set.add(str[i]);
  }
  return true;
};

const allUniqueChars2 = str => {
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) return false;
    }
  }
  return true;
};

module.exports = allUniqueChars;
