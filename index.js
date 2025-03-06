const add = (numsString) => {
  let match = numsString.match(/^\/\/.*\s/);

  if (match) {
    let delimitersString = numsString.slice(
      match.index + 2,
      match.index + match[0].length - 1
    ); // Extract delimiter string
    let allMatches = [...delimitersString.matchAll(/\[(.*?)\]/g)].map(
      (m) => m[1]
    ); // Extract all delimiters within brackets
    numsString = numsString.slice(match[0].length); // Remove delimiter definition from the string

    for (let delimiter of allMatches) {
      numsString = numsString.split(delimiter).join(","); // Replace all delimiter with ","
    }
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
