describe("removeDups", function() {
  const Node = require("../../lib/ch2/helpers/Node");
  const findNodeAtLoopStart = require("../../lib/ch2/2.5");

  const lst1 = new Node("A");
  const repNode = new Node("B");
  lst1.append(repNode);
  lst1.append(new Node("C"));
  lst1.append(new Node("D"));
  lst1.append(repNode);

  it("finds the repeating node", function() {
    expect(findNodeAtLoopStart(lst1)).toEqual(repNode);
  });

});
