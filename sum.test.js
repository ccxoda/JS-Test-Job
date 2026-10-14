const sum = require("./sum");
test("adds 3 + 2 to equal 5", () => {
  expect(sum(3, 2)).toBe(5);
});
test("adds 6 + 7 to equal 13", () => {
  expect(sum(6, 7)).toBe(13);
});
