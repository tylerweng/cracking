describe("strReverse", function() {
  const strReverse = require("../../lib/ch1/1.2");

  const str1 = "";
  const sol1 = "";
  const str2 = "abc";
  const sol2 = "cba";
  const str3 = "xyzefg";
  const sol3 = "gfezyx";

  it("handles trivial cases", function() {
    expect(strReverse(str1)).toEqual(sol1);
  });

  it("handles more involved cases", function() {
    expect(strReverse(str2)).toEqual(sol2);
    expect(strReverse(str3)).toEqual(sol3);
  });

});
