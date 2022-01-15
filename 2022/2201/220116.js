// Finding 3-Digit Even Numbers

// You are given an integer array digits, where each element is a digit. The array may contain duplicates.
// You need to find all the unique integers that follow the given requirements:
// The integer consists of the concatenation of three elements from digits in any arbitrary order.
// The integer does not have leading zeros.
// The integer is even.
// For example, if the given digits were [1, 2, 3], integers 132 and 312 follow the requirements.
// Return a sorted array of the unique integers.

// Example:
// Input: digits = [2,1,3,0]
// Output: [102,120,130,132,210,230,302,310,312,320]
// Explanation: All the possible integers that follow the requirements are in the output array.
// Notice that there are no odd integers or integers with leading zeros.

// 주어진 배열에서 만들 수 있는 유니크한 세자리 짝수를 오름차순으로 반환하는 문제

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
  let result = [];
  // 결과를 정렬하는 것보다 시작부터 정렬하는게 갯수가 더 적음
  digits.sort((a, b) => a - b);
  for (let i = 0; i < digits.length; i++) {
    // 앞자리가 0이면 통과(세자리가 안됨)
    if (digits[i] === 0) continue;
    for (let j = 0; j < digits.length; j++) {
      // 같은 수는 통과
      if (i === j) continue;
      for (let k = 0; k < digits.length; k++) {
        // 짝수가 아니거나 같은 수는 통과
        if (digits[k] % 2 || i === k || j === k) continue;
        const num = Number(
          String(digits[i]) + String(digits[j]) + String(digits[k])
        );
        // 유니크 한 경우만 push
        if (!result.includes(num)) result.push(num);
      }
    }
  }
  return result;
};
