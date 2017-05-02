describe("removeDups", function() {
  const Node = require("../../lib/ch2/helpers/Node");
  const nthToLast = require("../../lib/ch2/2.2");

  const lst1 = new Node("A");
  const sol1 = new Node("A");

  const lst2 = new Node("A");
  lst2.append(new Node("B"));
  lst2.append(new Node("C"));
  lst2.append(new Node("B"));
  lst2.append(new Node("D"));
  lst2.append(new Node("D"));

  const sol2 = new Node("B");
  sol2.append(new Node("C"));
  sol2.append(new Node("B"));
  sol2.append(new Node("D"));
  sol2.append(new Node("D"));

  it("handles trivial cases", function() {
    expect(nthToLast(lst1, 0).isEqual(sol1)).toBeTruthy();
  });

  it("handles more involved cases", function() {
    expect(nthToLast(lst2, 4).isEqual(sol2)).toBeTruthy();
  });

});
