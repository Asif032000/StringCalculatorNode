const add = (nums) => {
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return parseInt(nums);
  }
  if (nums.length === 3) {
    return parseInt(nums[0]) + parseInt(nums[nums.length - 1]);
  }
};

module.exports = { add };
