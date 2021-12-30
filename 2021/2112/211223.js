// Roman to Integer

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together.
// 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
// Roman numerals are usually written largest to smallest from left to right.
// However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four.
// The same principle applies to the number nine, which is written as IX.
// There are six instances where subtraction is used:
// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// 주어진 로마숫자를 정수로 반환하는 문제

/**
 * @param {string} s
 * @return {number}
 */
// 로마 숫자와 정수 맵핑
var mapRomanToInt = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const curInt = mapRomanToInt[s[i]];
    const nextInt = mapRomanToInt[s[i + 1]];

    // 예외의 경우인 작은 숫자가 큰 숫자 앞에 나오는 경우 (ex. IV = 4)를 처리
    if (curInt < nextInt) {
      // 작은 숫자가 앞에 나오면 큰 숫자에서 작은 숫자를 뺀 값이 들어감
      result += nextInt - curInt;
      // 다음 숫자를 한번에 처리했으므로 다음 숫자는 건너뜀
      i += 1;
      continue;
    }
    // 그 외에는 맵핑된 숫자를 그대로 더함
    result += curInt;
  }

  return result;
};
