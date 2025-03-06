const add = (numsString) => {
  let match = numsString.match(/^\/\/./);

  if (match) {
    let delimiter = numsString[2]; // Extract custom delimiter
    numsString = numsString.slice(4); // Remove the custom delimiter part
    numsString = numsString.replace(new RegExp(`\\${delimiter}`, "g"), ","); // Replace delimiter with comma
  }

  let nums = numsString
    .replace(/,/g, " ")
    .replace(/\n/g, " ")
    .split(/\s+/)
    .map(Number);
  let negativeNumbers = nums.filter((num) => num < 0);

  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(",")}`
    );
  }

  return nums.reduce((sum, num) => sum + num, 0);
};

module.exports = { add };
