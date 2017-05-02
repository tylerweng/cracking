describe("removeDups", function() {
  const Node = require("../../lib/ch2/helpers/Node");
  const deleteMiddleNode = require("../../lib/ch2/2.3");



  const lst1 = new Node("A");
  lst1.append(new Node("B"));
  const middleNode = new Node("C");
  lst1.append(middleNode);
  lst1.append(new Node("D"));
  lst1.append(new Node("E"));

  const sol1 = new Node("D");
  sol1.append(new Node("E"));

  it("deletes the specified node", function() {
    // Can't actually test to see if the nodes prior to middleNode
    // were properly linked in a singly linked list
    expect(deleteMiddleNode(middleNode).isEqual(sol1)).toBeTruthy();
  });


});
