const add = (numsString) => {
  let match = numsString.match(/^\/\/.*\s/);

  if (match) {
    let delimiter = numsString.slice(
      match.index + 2,
      match.index + match[0].length - 1
    ); // Parse dynamic delimiter
    numsString = numsString.slice(match[0].length); // Remove the delimiter definition from the string
    numsString = numsString.split(delimiter).join(","); // Replace delimiter with ","
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

  nums = nums.filter((num) => num < 1001);

  return nums.reduce((sum, num) => sum + num, 0);
};

module.exports = { add };
