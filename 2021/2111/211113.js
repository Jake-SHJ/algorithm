// Maximum Number of Balloons

// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example:
// Input: text = "nlaebolko"
// Output: 1

// 주어진 문자열로 "ballon"이란 문자열을 최대 몇 개까지 만들수있는지 반환하는 문제

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const map = new Map();
  let result = 0;

  for (const char of text) {
    if ("balon".includes(char)) map.set(char, (map.get(char) || 0) + 1);
  }

  while (
    map.get("b") > 0 &&
    map.get("a") > 0 &&
    map.get("l") > 1 &&
    map.get("o") > 1 &&
    map.get("n") > 0
  ) {
    result += 1;

    map.set("b", map.get("b") - 1);
    map.set("a", map.get("a") - 1);
    map.set("l", map.get("l") - 2);
    map.set("o", map.get("o") - 2);
    map.set("n", map.get("n") - 1);
  }

  return result;
};
