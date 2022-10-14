const checkConsecutive = require("./index.js");

describe("Should be consecutive arrays", () => {
  it("Not removes anything", () => {
    expect(checkConsecutive([1, 2, 3, 4, 5, 6, 7, 9])).toMatchObject({
      isConsecutive: true,
      array: [1, 2, 3, 4, 5, 6, 7, 9],
    });
  });
  it("Remove only one", () => {
    expect(checkConsecutive([1, 2, 3, 2, 4, 5, 6, 7])).toMatchObject({
      isConsecutive: true,
      array: [1, 2, 3, 4, 5, 6, 7],
    });
  });
});

describe("Should NOT be consecutive arrays", () => {
  it("Fails on 2", () => {
    expect(checkConsecutive([1, 2, 2, 2, 4, 5, 6, 7])).toMatchObject({
      isConsecutive: false,
      array: [1, 2, 2, 2, 4, 5, 6, 7],
    });
  });
  it("Fails on 1", () => {
    expect(checkConsecutive([1, 2, 3, 1, 1, 4, 8, 9])).toMatchObject({
      isConsecutive: false,
      array: [1, 2, 3, 1, 1, 4, 8, 9],
    });
  });
});
