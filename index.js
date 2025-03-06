const add = (numsString) => {
  let match = numsString.match(/^\/\/./);

  if (match) {
    let delimiter = numsString[2]; // Extract custom delimiter
    numsString = numsString.slice(4); // Remove the custom delimiter part
    numsString = numsString.replace(new RegExp(`\\${delimiter}`, "g"), ","); // Replace delimiter with comma
  }

  let nums = numsString.replace(/,/g, " ").replace(/\n/g, " ").split(/\s+/);
  return nums.reduce((sum, num) => sum + Number(num), 0);
};

module.exports = { add };
