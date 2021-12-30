// Goal Parser Interpretation

// You own a Goal Parser that can interpret a string command.
// The command consists of an alphabet of "G", "()" and/or "(al)" in some order.
// The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al".
// The interpreted strings are then concatenated in the original order.
// Given the string command, return the Goal Parser's interpretation of command.

// Example:
// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".

// 정해진 규칙에 따라 문자열을 파싱하는 문제

/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  return command.replaceAll("()", "o").replaceAll("(al)", "al");
};

// replaceAll로 해당 문자열을 치환하여 해결

var interpret = function (command) {
  return command.split("()").join("o").split("(al)").join("al");
};

// discuss에 이런 방법도 있었음
