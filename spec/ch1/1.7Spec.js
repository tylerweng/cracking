describe("zerofy", function() {
  const zerofy = require("../../lib/ch1/1.7");

  const mat1 = [
    ["A", "B", "C", "D"],
    ["E",   0, "G", "H"],
    ["I", "J", "K", "L"],
    ["M", "N", "O", "P"],
  ];
  const sol1 = [
    [ "A",   0, "C", "D" ],
    [   0,   0,   0,   0 ],
    [ "I",   0, "K", "L" ],
    [ "M",   0, "O", "P" ]
  ];

  it("handles zerofying a matrix", function() {
    expect(zerofy(mat1)).toEqual(sol1);
  });


});
