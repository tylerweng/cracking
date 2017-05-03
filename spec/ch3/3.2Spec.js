describe("Stack with O(1) push, pop & min", function() {
  const Stack = require("../../lib/ch3/3.2");

  const stk1 = new Stack();
  const stk2 = new Stack();
  const stk3 = new Stack();

  const sol1 = {
    el: 8,
    min: 5
  };

  beforeEach(function() {
    stk1.push(10);
    stk1.push(5);
    stk1.push(8);
    stk2.push(10);
    stk2.push(5);
    stk2.push(8);
  });

  it("pushes in elements properly", function() {
    expect(Stack.stackComparator(stk1, stk2)).toBeTruthy();
    expect(Stack.stackComparator(stk1, stk3)).toBeFalsy();
  });

  it("pops off the last el properly", function() {
    const popped = stk1.pop();
    expect(Stack.elComparator(popped, sol1)).toBeTruthy();
  });

  it("returns the min el properly", function() {
    expect(stk1.min()).toEqual(5);
  });

});
