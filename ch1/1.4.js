// Write a method to decide if two strings are anagrams or not

const areAnagrams = (str1, str2) => (
  str1.split("").sort().join("") === str2.split("").sort().join("")
);
