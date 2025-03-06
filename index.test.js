const test = require("node:test");
const assert = require("assert/strict");
const { add } = require("./index");

test("", () => {
  return assert.equal(add([]), 0);
});
