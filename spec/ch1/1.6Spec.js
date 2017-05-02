describe("rotateMatrix90", function() {
  const rotateMatrix90 = require("../../lib/ch1/1.6");

  const mat1 = [
    ["A", "B", "C", "D"],
    ["E", "F", "G", "H"],
    ["I", "J", "K", "L"],
    ["M", "N", "O", "P"],
  ];
  const sol1 = [
    [ "M", "I", "E", "A" ],
    [ "N", "J", "F", "B" ],
    [ "O", "K", "G", "C" ],
    [ "P", "L", "H", "D" ]
  ];

  it("handles rotating a matrix", function() {
    expect(rotateMatrix90(mat1)).toEqual(sol1);
  });


});
