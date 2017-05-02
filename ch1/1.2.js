// Write code to reverse a C-Style String (C-String means that “abcd” is
// represented as five characters, including the null character )

const strReverse = str => {
  let rev;
  for (let i = str.length - 1; i >= 0; i--) {
    if (rev === undefined) {
      rev = str[i];
    } else {
      rev += str[i];
    }
  }
  return rev + "";
};
