// Complex Number Multiplication

// A complex number can be represented as a string on the form "real+imaginaryi"
// where:
// - real is the real part and is an integer in the range [-100, 100].
// - imaginary is the imaginary part and is an integer in the range [-100, 100].
// - i^2 == -1.
// Given two complex numbers num1 and num2 as strings,
// return a string of the complex number that represents their multiplications.

// Example:
// Input: num1 = "1+1i", num2 = "1+1i"
// Output: "0+2i"
// Explanation: (1 + i) * (1 + i) = 1 + i^2 + 2 * i = 2i, and you need convert it to the form of 0+2i.

// 주어진 두 complex number의 곱을 반환하는 문제

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function (a, b) {
  // 실수부와 허수부를 쪼개서 계산하고 문자열로 반환
  const splitA = a.split("+");
  const aReal = Number(splitA[0]);
  const aImg = Number(splitA[1].slice(0, splitA[1].length - 1));
  const splitB = b.split("+");
  const bReal = Number(splitB[0]);
  const bImg = Number(splitB[1].slice(0, splitB[1].length - 1));

  const cal1 = aReal * bReal;
  const cal2 = aImg * bImg * -1;
  const cal3 = aReal * bImg + bReal * aImg;

  return `${cal1 + cal2}+${cal3}i`;
};
