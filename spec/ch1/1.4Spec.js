describe("areAnagrams", function() {
  const areAnagrams = require("../../lib/ch1/1.4");

  const str1a = "", str1b = "";
  const sol1 = true;
  const str2a = "abc", str2b = "abc";
  const sol2 = true;
  const str3a = "abcd", str3b = "cdba";
  const sol3 = true;
  const str4a = "abcdz", str4b = "zydex";
  const sol4 = false;


  it("handles trivial cases", function() {
    expect(areAnagrams(str1a, str1b)).toEqual(sol1);
    expect(areAnagrams(str2a, str2b)).toEqual(sol2);
  });

  it("handles more involved cases", function() {
    expect(areAnagrams(str3a, str3b)).toEqual(sol3);
    expect(areAnagrams(str4a, str4b)).toEqual(sol4);
  });

});
