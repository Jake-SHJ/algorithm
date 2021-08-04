// Maximum 69 Number

// Given a positive integer num consisting only of digits 6 and 9.
// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

// Example:
// Input: num = 9669
// Output: 9969
// Explanation:
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666.
// The maximum number is 9969.

// 주어진 수의 자릿수 하나만 바꿨을 때의 가장 큰 수를 반환하는 문제 (주어진 수가 가장 큰 수이면 그대로 반환)

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  let changed = false;

  return num
    .toString()
    .split("")
    .map((dig) => {
      if (dig === "6" && changed === false) {
        changed = true;
        return (dig = 9);
      } else {
        return dig;
      }
    })
    .join("");
};

// 6과 9만 주어지는 상황에서 가장 큰 자릿수의 6을 9로만 바꾸면 가장 큰 수임
// num의 문자열화, 문자간 분리, 자릿수처리후 다시 합치는 과정을 거침
