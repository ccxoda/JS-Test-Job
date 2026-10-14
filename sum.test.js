const sum = require("./sum");
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
test("adds 32 + 35 to equal 67", () => {
  expect(sum(32, 35)).toBe(67);
});
