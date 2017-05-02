describe("removeDups", function() {
  const Node = require("../../lib/ch2/helpers/Node");
  const removeDups = require("../../lib/ch2/2.1");

  const lst1 = new Node("A");
  const sol1 = new Node("A");

  const lst2 = new Node("A");
  lst2.append(new Node("B"));
  lst2.append(new Node("C"));
  lst2.append(new Node("B"));
  lst2.append(new Node("D"));
  lst2.append(new Node("D"));

  const sol2 = new Node("A");
  sol2.append(new Node("B"));
  sol2.append(new Node("C"));
  sol2.append(new Node("D"));

  it("handles trivial cases", function() {
    expect(removeDups(lst1)).toEqual(sol1);
  });

  it("handles more involved cases", function() {
    expect(removeDups(lst2)).toEqual(sol2);
  });

});
