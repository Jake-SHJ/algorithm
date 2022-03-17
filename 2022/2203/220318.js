// Latest Time by Replacing Hidden Digits

// You are given a string time in the form of hh:mm, where some of the digits in the string are hidden (represented by ?).
// The valid times are those inclusively between 00:00 and 23:59.
// Return the latest valid time you can get from time by replacing the hidden digits.

// Example:
// Input: time = "2?:?0"
// Output: "23:50"
// Explanation: The latest hour beginning with the digit '2' is 23 and the latest minute ending with the digit '0' is 50.

// 주어진 시간에서 ?를 채웠을때 가장 늦은 시간을 반환하는 문제

/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function (time) {
  // 시간 자리수 별로 spread
  let [hour1, hour2, colon, minute1, minute2] = time.split("");
  if (hour1 === "?" && hour2 === "?") {
    // 시간이 둘 다 ?면 최대 23시
    hour1 = 2;
    hour2 = 3;
  } else if (hour1 === "?") {
    // 시간의 10의 자리만 물음표인 경우
    hour2 > 3 ? (hour1 = 1) : (hour1 = 2);
  } else if (hour2 === "?") {
    // 시간의 1의 자리만 물음표인 경우
    hour1 > 1 ? (hour2 = 3) : (hour2 = 9);
  }

  // 분은 무조건 59가 최대
  if (minute1 === "?") minute1 = 5;
  if (minute2 === "?") minute2 = 9;
  // join하여 반환
  return [hour1, hour2, colon, minute1, minute2].join("");
};
