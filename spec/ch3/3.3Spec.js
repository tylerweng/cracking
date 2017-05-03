describe("SetOfStack with O(1) push, pop & min", function() {
  const Stack = require("../../lib/ch3/3.2");
  const SetOfStacks = require("../../lib/ch3/3.3");

  const set1 = new SetOfStacks();
  const set2 = new SetOfStacks();
  const set3 = new SetOfStacks();

  const sol1 = {
    el: 8,
    min: 5
  };

  beforeEach(function() {
    set1.push(10);
    set1.push(5);
    set1.push(8);
    set1.push(8);
    set2.push(10);
    set2.push(5);
    set2.push(8);
    set2.push(8);
  });

  it("pushes in elements properly", function() {
    expect(SetOfStacks.setComparator(set1, set2)).toBeTruthy();
    expect(SetOfStacks.setComparator(set1, set3)).toBeFalsy();
  });

  it("pops off the last el properly", function() {
    const popped = set1.pop();
    expect(Stack.elComparator(popped, sol1)).toBeTruthy();
  });

  it("returns the min el properly", function() {
    expect(set1.min()).toEqual(5);
  });

});
