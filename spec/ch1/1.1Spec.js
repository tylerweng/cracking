describe("allUniqueChars", function() {
  const allUniqueChars = require("../../lib/ch1/1.1");

  const str1 = "";
  const sol1 = true;
  const str2 = "abcdef";
  const sol2 = true;
  const str3 = "bcab";
  const sol3 = false;

  it("handles trivial cases", function() {
    expect(allUniqueChars(str1)).toEqual(sol1);
  });

  it("handles more involved cases", function() {
    expect(allUniqueChars(str2)).toEqual(sol2);
    expect(allUniqueChars(str3)).toEqual(sol3);
  });

});
