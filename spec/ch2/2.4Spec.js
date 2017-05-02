describe("removeDups", function() {
  const Node = require("../../lib/ch2/helpers/Node");
  const add = require("../../lib/ch2/2.4");

  const lst1a = new Node(3);
  lst1a.append(new Node(1));
  lst1a.append(new Node(5));
  const lst1b = new Node(5);
  lst1b.append(new Node(9));
  lst1b.append(new Node(2));
  const sol1 = new Node(8);
  sol1.append(new Node(0));
  sol1.append(new Node(8));

  const lst2a = new Node(3);
  lst2a.append(new Node(1));
  lst2a.append(new Node(9));
  const lst2b = new Node(5);
  lst2b.append(new Node(9));
  lst2b.append(new Node(9));
  const sol2 = new Node(8);
  sol2.append(new Node(0));
  sol2.append(new Node(9));
  sol2.append(new Node(1));

  const lst3a = new Node(2);
  const lst3b = new Node(8);
  lst3b.append(new Node(5));
  const sol3 = new Node(0);
  sol3.append(new Node(6))


  it("handles lists of equal length", function() {
    expect(add(lst1a, lst1b).isEqual(sol1)).toBeTruthy();
    expect(add(lst2a, lst2b).isEqual(sol2)).toBeTruthy();
  });

  it("handles lists of differing length", function() {
    expect(add(lst3a, lst3b).isEqual(sol3)).toBeTruthy();

  });

});
