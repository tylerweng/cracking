describe("removeDuplicates", function() {
  const removeDuplicates = require("../../lib/ch1/1.3");

  const str1 = "";
  const sol1 = "";
  const str2 = "abc";
  const sol2 = "abc";
  const str3 = "abeaxzz";
  const sol3 = "abexz";

  it("handles trivial cases", function() {
    expect(removeDuplicates(str1)).toEqual(sol1);
  });

  it("handles more involved cases", function() {
    expect(removeDuplicates(str2)).toEqual(sol2);
    expect(removeDuplicates(str3)).toEqual(sol3);
  });

});
