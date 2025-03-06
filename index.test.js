const test = require("node:test");
const assert = require("assert/strict");
const { add } = require("./index");

test("", () => {
  assert.equal(add(""), 0);
});

test("", () => {
  assert.equal(add("1"), 1);
});
test("", () => {
  assert.equal(add("1,5"), 6);
});
test("", () => {
  assert.equal(add("1,2,3,4,5,6,7,8,9,10"), 55);
});
test("adds numbers from a string with commas and newlines", () => {
  assert.equal(add("1,2,3,4\n5,6,7\n8,9,10"), 55);
});
test("handle delimiters", () => {
  assert.equal(add("//;\n1;2;3;4;5;6;7;8;9;10"), 55);
});
test("handle delimiters", () => {
  assert.equal(add("//%\n1%2%3%4%5%6%7%8%9%10%12"), 67);
});
// test("negative numbers", () => {
//   assert.equal(add("//%\n1%2%-3%4%5%6%7%8%9%10%12"), 67);
// });

// test("negative numbers", () => {
//   assert.equal(add("//%\n1%2%3%4%-5%6%-7%8%9%-10%12"), 67);
// });

test("handle numbers larger than 1000", () => {
  assert.equal(add("//;\n1;2;3;4;5;6;7;8;9;10;2030;4444"), 55);
});
