const checkConsecutive = require("./index.js");

describe("Should be consecutive arrays", () => {
  it("Remove only one", () => {
    expect(checkConsecutive([1, 2, 3, 4, 5, 6, 7, 9])).toBe(true);
  });
  it("Not removes anything", () => {
    expect(checkConsecutive([1, 2, 3, 2, 4, 5, 6, 7])).toBe(true);
  });
});

describe("Should NOT be consecutive arrays", () => {
  it("Fails on 2", () => {
    expect(checkConsecutive([1, 2, 2, 2, 4, 5, 6, 7])).toBe(false);
  });
  it("Fails on 1", () => {
    expect(checkConsecutive([1, 2, 3, 1, 1, 4, 8, 9])).toBe(false);
  });
});
