describe("isRotation", function() {
  const isRotation = require("../../lib/ch1/1.8");

  const str1a = "", str1b = "";
  const sol1 = true;
  const str2a = "abc", str2b = "abc";
  const sol2 = true;
  const str3a = "abcd", str3b = "bcda";
  const sol3 = true;
  const str4a = "waterbottle", str4b = "erbottlewat";
  const sol4 = true;
  const str5a = "watebrottle", str5b = "erbottlewat";
  const sol5 = false;


  it("handles trivial cases", function() {
    expect(isRotation(str1a, str1b)).toEqual(sol1);
    expect(isRotation(str2a, str2b)).toEqual(sol2);
  });

  it("handles more involved cases", function() {
    expect(isRotation(str3a, str3b)).toEqual(sol3);
    expect(isRotation(str4a, str4b)).toEqual(sol4);
    expect(isRotation(str4a, str4b)).toEqual(sol4);
    expect(isRotation(str5a, str5b)).toEqual(sol5);
  });

});
