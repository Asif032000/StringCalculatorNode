const add = (numsString) => {
  if (numsString === "") {
    return 0;
  }

  let nums = numsString.split(",").map(Number);
  return nums.reduce((sum, num) => sum + num, 0);
};

module.exports = { add };
