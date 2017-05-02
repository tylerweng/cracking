describe("percentEncode", function() {
  const percentEncode = require("../../lib/ch1/1.5");

  const str1 = "";
  const sol1 = "";
  const str2 = " ";
  const sol2 = "%20";
  const str3 = "the is a god";
  const sol3 = "the%20is%20a%20god";



  it("handles trivial cases", function() {
    expect(percentEncode(str1)).toEqual(sol1);
  });

  it("handles more involved cases", function() {
    expect(percentEncode(str2)).toEqual(sol2);
    expect(percentEncode(str3)).toEqual(sol3);
  });

});
