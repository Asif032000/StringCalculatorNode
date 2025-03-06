const test = require("node:test");
const assert = require("assert/strict");
const { add } = require("./index");

test("", () => {
  return assert.equal(add(""), 0);
});

test("", () => {
  return assert.equal(add("1"), 1);
});
test("", () => {
  return assert.equal(add("1,5"), 6);
});
test("", () => {
  return assert.equal(add("1,2,3,4,5,6,7,8,9,10"), 55);
});
