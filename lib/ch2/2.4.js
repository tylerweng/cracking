// You have two numbers represented by a linked list, where each node contains a sin- gle digit The digits are stored in reverse order, such that the 1’s digit is at the head of the list Write a function that adds the two numbers and returns the sum as a linked list
// EXAMPLE
// Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
// Output: 8 -> 0 -> 8

const Node = require("./helpers/Node");

const add = (lst1, lst2) => {
  const lst3 = new Node(0);
  let n1 = lst1;
  let n2 = lst2;
  let n3 = lst3;
  let rem = 0;

  while (n1 || n2) {
    const v1 = n1 ? n1.value : 0;
    const v2 = n2 ? n2.value : 0;
    n3.value = (v1 + v2 + rem) % 10;
    rem = Math.floor((v1 + v2 + rem) / 10);
    if (!n1.next && !n2.next) break;
    n3.next = new Node(0);
    n1 = n1.next || false;
    n2 = n2.next || false;
    n3 = n3.next;
  }

  if (rem !== 0) n3.next = new Node(rem);

  return lst3;
};

module.exports = add;
