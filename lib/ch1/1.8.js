// Assume you have a method isSubstring which checks if one word is a
// substring of another Given two strings, s1 and s2, write code to
// check if s2 is a rotation of s1 using only one call to isSubstring
// (i e , “waterbottle” is a rotation of “erbottlewat”)

const isSubstring = (sub, str) => (
  str.includes(sub)
);

const isRotation = (str1, str2) => (
  str1.length === str2.length && isSubstring(str1, str2.concat(str2))
);

module.exports = isRotation;
