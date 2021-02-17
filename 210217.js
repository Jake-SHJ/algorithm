// Add Strings

// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let result = "";
  let num1idx = num1.length - 1;
  let num2idx = num2.length - 1;
  let saveNum = 0;

  while (num1idx >= 0 || num2idx >= 0) {
    const num1char = num1idx >= 0 ? parseInt(num1.charAt(num1idx)) : 0;
    const num2char = num2idx >= 0 ? parseInt(num2.charAt(num2idx)) : 0;

    const sum = parseInt((num1char + num2char + saveNum) % 10);
    saveNum = parseInt((num1char + num2char + saveNum) / 10);
    result += String(sum);

    num1idx--;
    num2idx--;
  }

  if (saveNum !== 0) {
    result += String(saveNum);
  }

  return result.split("").reverse().join("");
};
