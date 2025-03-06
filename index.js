const add = (numsString) => {
  let nums = numsString.replace(/,/g, " ").replace(/\n/g, " ").split(/\s+/);
  return nums.reduce((sum, num) => sum + Number(num), 0);
};

module.exports = { add };
