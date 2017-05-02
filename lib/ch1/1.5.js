// Write a method to replace all spaces in a string with ‘%20’

const percentEncode = str => {
  let encoded = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "") {
      encoded += "%20";
    } else {
      encoded += str[i];
    }
  }
  return encoded;
};
