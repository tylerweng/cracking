// You have two very large binary trees: T1, with millions of nodes,
// and T2, with hundreds of nodes Create an algorithm to decide if T2
// is a subtree of T1

const containsTree = (t1, t2) => {
  if (t2 === null) return true;
  return subTree(t1, t2);
};

const subTree = (t1, t2) => {
  if (t1 === null) return false;
  if (t1.data === t2.data) {
    if (matchTree(t1, t2)) return true;
  }
  return subTree(t1.left, t2) || subTree(t1.right, t2);
};

const matchTree = (t1, t2) => {
  if (t1 === null && t2 === null) return true;
  if (t1 === null || t2 === null) return false;
  if (t1.data !== t2.data) return false;
  return (
    matchTree(t1.left, t2.left) &&
    matchTree(t1.right, t2.right)
  );
};
